from fastapi import APIRouter
from services.gemini_service import ask_gemini
from routes.uploads import manual_text
import json
from datetime import datetime

router = APIRouter()


@router.post("/assistant")
def assistant(data: dict):

    question = data["question"]

    product = data.get(
        "product",
        "General Product"
    )

    brand = data.get(
        "brand",
        ""
    )   

    answer = ask_gemini(
    question,
    manual_text,
    product,
    brand
)

    with open(
        "data/chat_history.json",
        "r"
    ) as file:

        history = json.load(file)

    history.append({
        "question": question,
        "answer": answer,
        "time": str(datetime.now())
    })

    with open(
        "data/chat_history.json",
        "w"
    ) as file:

        json.dump(
            history,
            file,
            indent=4
        )

    return {
        "answer": answer
    }

@router.get("/history")
def history():

    with open(
        "data/chat_history.json",
        "r"
    ) as file:

        return json.load(file)