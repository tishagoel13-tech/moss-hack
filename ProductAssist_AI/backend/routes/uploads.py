from fastapi import APIRouter, UploadFile, File
from services.pdf_service import extract_text

router = APIRouter()

manual_text = ""

@router.post("/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):

    global manual_text

    path = f"uploads/{file.filename}"

    with open(path, "wb") as f:
        f.write(await file.read())

    manual_text = extract_text(path)

    return {
        "message": "Manual uploaded"
    }