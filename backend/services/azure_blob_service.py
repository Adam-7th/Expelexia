import os
from azure.storage.blob import BlobServiceClient
from pathlib import Path

AZURE_CONNECTION_STRING = os.getenv("AZURE_STORAGE_CONNECTION_STRING")
AZURE_CONTAINER_NAME = os.getenv("AZURE_STORAGE_CONTAINER_NAME")



def download_blob_if_not_exists(blob_name: str, local_path: Path, container_override: str = None) -> bool:
    """
    Download a blob from Azure Blob Storage (default: lab-data, override for lab-reports) if it does not exist locally.
    Returns True if downloaded, False if already exists or failed.
    """
    if local_path.exists():
        return False
    if not AZURE_CONNECTION_STRING:
        return False
    container_name = container_override or AZURE_CONTAINER_NAME or "lab-data"
    try:
        blob_service_client = BlobServiceClient.from_connection_string(AZURE_CONNECTION_STRING)
        container_client = blob_service_client.get_container_client(container_name)
        blob_client = container_client.get_blob_client(blob_name)
        with open(local_path, "wb") as f:
            download_stream = blob_client.download_blob()
            f.write(download_stream.readall())
        return True
    except Exception as e:
        print(f"Azure download failed: {e}")
        return False
