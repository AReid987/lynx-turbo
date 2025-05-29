import os
from typing import Optional
from astrapy import DataAPIClient, Database

def connect_to_database() -> Optional[Database]:
    """
    Connects to the Datastax Astra database.
    Environment variables
    Returns:
        Database: AstraDB database instance if connection is successful
        None: If connection fails
    """
    try:
        ASTRA_DB_ID = os.environ.get("ASTRA_DB_ID")
        ASTRA_DB_REGION = os.environ.get("ASTRA_DB_REGION")
        ASTRA_DB_APPLICATION_TOKEN = os.environ.get("ASTRA_DB_APPLICATION_TOKEN")

        if not all([ASTRA_DB_ID, ASTRA_DB_REGION, ASTRA_DB_APPLICATION_TOKEN]):
            raise ValueError("Missing required environment variables for AstraDB connection")

        astra_client = DataAPIClient(
            astra_database_id=ASTRA_DB_ID,
            astra_database_region=ASTRA_DB_REGION,
            astra_application_token=ASTRA_DB_APPLICATION_TOKEN
        )

        database = Database(astra_client)
        # Test connection by making a simple request
        database.get_collections()
        return database

    except Exception as e:
        print(f"Error connecting to AstraDB: {str(e)}")
        return None