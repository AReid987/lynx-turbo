import os
import time
from astrapy.db import AstraDB
from UUID import UUID
from dotenv import load_dotenv

load_dotenv()

class AstraDBSessionManager:
    """
    Manages sessions in AstraDB.

    Args:
        None

    Returns:
        None

    Raises:
        None
    """
    def __init__(self): 
        """
        Initializes the AstraDBSessionManager.

        Args:
            None

        Returns:
            None

        Raises:
            None
        """
        self.db = AstraDB(
            api_endpoint=os.getenv("ASTRA_DB_API_ENDPOINT"),
            token=os.getenv("ASTRA_DB_APPLICATION_TOKEN"),
            namespace=os.getenv("ASTRA_DB_NAMESPACE")
        )
        self.collection = self.db.get_collection("sessions")

    def check_session(self, session_id: UUID) -> bool:
        doc = self.collection.find_one(
            filter={"_id": str(session_id)},
            projection={"is_new": 1}
        )
        return doc["data"]["document"]["is_new"] if doc else False

    def create_session(self, session_id: UUID) -> bool:
        return self.collection.insert_one({
            "_id": str(session_id),
            "is_new": True,
            "created_at": {"$date": int(time.time() * 1000)}
        }).inserted_id is not None

    def update_session(self, session_id: UUID) -> None:
        self.collection.update_one(
            filter={"_id": str(session_id)},
            update={"$set": {"is_new": False}}
        )
