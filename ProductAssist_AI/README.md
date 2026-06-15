# ProductAssist AI

## SheCodes

**SheCodes**

## Team Members

1. Tisha Goel
2. Shubreet Lamba
3. Reet Singh
4. Tanvi

---

# Project Overview

ProductAssist AI is an intelligent product troubleshooting assistant that helps users diagnose and resolve issues with everyday products such as scooters, appliances, and electronics.

Users can describe their problem in natural language, and the AI assistant provides troubleshooting guidance, possible causes, and recommended solutions. If the issue cannot be resolved, users can find nearby mechanics or service providers for further assistance.

The goal of ProductAssist AI is to reduce downtime, simplify troubleshooting, and provide quick support without requiring users to read lengthy manuals.

---

# Features and Functionality

### AI-Powered Troubleshooting

* Users can describe product issues in natural language.
* AI analyzes the problem and provides step-by-step solutions.

### Product and Brand Selection

* Users can specify product category and brand.
* Responses are tailored to the selected product information.

### Manual-Based Assistance

* Product manuals can be uploaded and processed.
* AI uses manual content to provide more accurate answers.

### Chat History

* Stores previous conversations for future reference.

### Downloadable Reports

* Generates troubleshooting reports that users can download.

### Mechanic Assistance

* Users can view mechanics or service providers when AI solutions are insufficient.

### User-Friendly Interface

* Simple and intuitive chatbot-style interaction.
* Responsive design for desktop and mobile devices.

---

# Tech Stack Used

## Frontend

* React.js
* JavaScript
* HTML5
* CSS3

## Backend

* FastAPI
* Python

## AI Integration

* Google Gemini API
(Tried for moss api but it having issues.)

## Database / Storage

* JSON-based storage for chat history and product data

## Other Tools

* PDF generation libraries
* REST APIs

---

# Setup and Installation Instructions

## Clone Repository

```bash
git clone https://github.com/your-username/productassist-ai.git
cd productassist-ai
```

## Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

Create a `.env` file:

```env
GEMINI_API_KEY=your_api_key_here
```

Start backend server:

```bash
uvicorn main:app --reload
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

Backend will run on:

```text
http://localhost:8000
```

---

# Usage Guide

1. Open the application.
2. Select a product category.
3. Enter the product brand (optional).
4. Describe the issue you are facing.
5. Receive AI-generated troubleshooting guidance.
6. Upload a manual if available for more accurate assistance.
7. Download the generated report if needed.
8. Contact a mechanic or service provider if the issue persists.


# Demo Video

Demo Video Link: [Demo Video](https://drive.google.com/file/d/1xUL1mBkIHQMsFBwLe4ms6vvwVU5E7cLa/view?usp=sharing)

```text
Paste your demo video link here
```

---

# Future Enhancements

* Multi-language support
* Voice-based interaction
* Real-time service center integration
* Predictive maintenance suggestions
* Advanced manual search and indexing

---

# Why ProductAssist AI?

Many users struggle to diagnose product issues and often spend time searching through manuals or waiting for support. ProductAssist AI provides quick, accessible, and intelligent troubleshooting assistance, helping users resolve problems faster and make informed decisions about repairs and maintenance.
