from fastapi import APIRouter, HTTPException
from services import data_service, report_service
from services.azure_blob_service import download_blob_if_not_exists
from pathlib import Path

router = APIRouter()

PROJECT_ROOT = Path(__file__).resolve().parents[2]
PROCESSED_DIR = PROJECT_ROOT / "data" / "processed"
PROCESSED_DIR.mkdir(parents=True, exist_ok=True)

@router.post("/analyze")
async def analyze_file(file_name: str):

    file_path = PROJECT_ROOT / "data" / "raw" / file_name
    if not file_path.exists():
        # Always fetch from 'lab-data' container for analysis
        fetched = download_blob_if_not_exists(file_name, file_path, container_override="lab-data")
        if not fetched and not file_path.exists():
            raise HTTPException(status_code=404, detail="File not found (local or Azure 'lab-data')")

    data_type, data = data_service.read_file(file_path)
    if data_type == "error":
        raise HTTPException(status_code=400, detail=f"Unable to read file: {data}")

    summary_json = data_service.summarize_data(data_type, data, file_name=file_name)
    ai_text = report_service.generate_ai_recommendation(summary_json)
    pdf_path = report_service.generate_pdf_report(file_name, summary_json)

    return {
        "file_name": file_name,
        "summary_json": summary_json,
        "ai_text": ai_text,
        "pdf_report": str(pdf_path)
    }