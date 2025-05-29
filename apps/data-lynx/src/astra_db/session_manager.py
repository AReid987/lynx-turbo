import os
import time
from uuid import UUID
from astrapy.db import AstraDB
from dotenv import load_dotenv
from fastapi import HTTPException

load_dotenv()

# TODO ADD Session Expiry

# Run once during initialization
# self.collection.create_index(options={"expireAfterSeconds": 86400})


class SessionManager:
    """
    SessionManager class for managing chat sessions in the AstraDB.

    Args:
        None

    Returns:
        None

    Raises:
        HTTPException: If there is an error accessing the database.

    Methods:
        _get_session(session_id: UUID) -> dict:
            Retrieves a session from the database based on the given session ID.

        is_new_session(session_id: UUID) -> bool:
            Checks if a session is new based on the given session ID.

        create_session(session_id: UUID) -> None:
            Creates a new session in the database with the given session ID.

        update_session(session_id: UUID) -> None:
            Updates the last active time of a session in the database based on the given session ID.
    """
    
    def __init__(self):
        """
        Initializes a SessionManager object.

        Args:
            self

        Returns:
            None
        """
        self.db = AstraDB(
            api_endpoint=os.getenv("ASTRA_DB_API_ENDPOINT"),
            token=os.getenv("ASTRA_DB_APPLICATION_TOKEN"),
            namespace=os.getenv("ASTRA_DB_KEYSPACE"),
        )
        self.collection = self.db.collection("chat_sessions")

    def _get_session(self, session_id: UUID) -> dict:
        """
        Retrieves a session from the database based on the given session ID.

        Args:
            self
            session_id (UUID): The ID of the session to retrieve.

        Returns:
            dict: The session document retrieved from the database.

        Raises:
            HTTPException: If there is an error accessing the database.
        """

        try:
            return self.collection.find_one({"_id": str(session_id)})
        except Exception as e:
            raise HTTPException(500, f"DB Error: {str(e)}") from e

    def is_new_session(self, session_id: UUID) -> bool:
        """
        Checks if a session is new based on the given session ID.

        Args:
            self
            session_id (UUID): The ID of the session to check.

        Returns:
            bool: True if the session is new, False otherwise.
        """

        doc = self._get_session(session_id)
        return doc["data"]["document"]["is_new"] if doc else True

    def create_session(self, session_id: UUID) -> None:
        """
        Creates a new session in the database with the given session ID.

        Args:
            self
            session_id (UUID): The ID of the session to create.

        Returns:
            None

        Raises:
            HTTPException: If there is an error creating the session.
        """

        try:
            self.collection.insert_one(
                {
                    "_id": str(session_id),
                    "is_new": True,
                    "created_at": time.time(),
                    "last_active": time.time(),
                }
            )
        except Exception as e:
            raise HTTPException(500, f"Session Creation failed: {str(e)}") from e

    def update_session(self, session_id: UUID) -> None:
        """
        Updates the last active time of a session in the database based on the given session ID.

        Args:
            self
            session_id (UUID): The ID of the session to update.

        Returns:
            None

        Raises:
            HTTPException: If there is an error updating the session.
        """

        try:
            self.collection.update_one(
                {"_id": str(session_id)}, {"$set": {"last_active": time.time()}}
            )
        except Exception as e:
            raise
