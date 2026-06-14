import google.generativeai as genai

from dotenv import load_dotenv
import os

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

def ask_gemini(
    question,
    manual,
    product,
    brand
):

    if manual.strip():

        prompt = f"""
You are a professional repair technician.

PRODUCT TYPE:
{product}

BRAND:
{brand}

Use the product manual when relevant.

MANUAL:
{manual[:10000]}

USER QUESTION:
{question}

Provide:
1. Problem analysis
2. Possible causes
3. Step-by-step troubleshooting
4. When to contact a mechanic/service center
"""

    else:

        prompt = f"""
You are a professional repair technician.

PRODUCT TYPE:
{product}

BRAND:
{brand}

No manual is available.

Use your technical knowledge to help diagnose the issue.

USER QUESTION:
{question}

Provide:
1. Problem analysis
2. Possible causes
3. Step-by-step troubleshooting
4. When to contact a mechanic/service center
"""

    try:

        response = model.generate_content(
            prompt
        )

        return response.text

    except Exception as e:

        return f"Gemini Error: {str(e)}"