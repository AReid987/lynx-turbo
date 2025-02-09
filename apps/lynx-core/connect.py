import os
from astrapy import DataAPIClient, Database

def connect_to_database() -> Database:
    """
    Connects to the Datastax Astra database.
    
    """
    ASTRA_DB_ID = os.environ.get("ASTRA_DB_ID")
    ASTRA_DB_REGION = os.environ.get("ASTRA_DB_REGION")
    ASTRA_DB_APPLICATION_TOKEN = os.environ.get("ASTRA_DB_APPLICATION_TOKEN")