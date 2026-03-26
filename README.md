# Expelexia Lab

Expelexia Lab is an AI-powered data analysis platform that automatically analyzes user data and generates intelligent, human-friendly recommendations to support better decision-making.

## Why Expelexia Lab

- Upload CSV or PDF files for fast AI-assisted analysis
- Generate clear summaries, dashboards, and visual insights
- Produce professional PDF reports with recommendations
- Support better decisions through explainable, human-readable outputs

## Core Capabilities

- **Data Upload & Processing**: Accepts multiple dataset types and document inputs
- **AI Analysis**: Builds narrative insights from processed data
- **Recommendation Engine**: Produces practical, decision-oriented suggestions
- **Dashboard Data API**: Serves front-end charts and summary views
- **Report Generation**: Exports polished report PDFs

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Chart.js
- **Backend**: FastAPI, Python
- **AI & Cloud Services**: Azure OpenAI / Foundry aliases, Azure Cognitive Services, Azure Storage

## Project Structure

```text
backend/        FastAPI API, services, report pipeline, environment template
frontend/       Next.js UI, pages, reusable components, API client
data/           Raw inputs, processed summaries, generated report artifacts
docs/           Setup and demo documentation
```

## Quick Start

### 1) Clone and enter project

```bash
git clone https://github.com/Adam-7th/Expelexia.git
cd Expelexia
```

### 2) Backend setup

```bash
cd backend
python -m venv .venv
.venv/Scripts/activate   # Windows PowerShell
pip install -r requirements.txt
```

Run backend:

```bash
.venv/Scripts/python.exe -m uvicorn main:app --reload --port 8000
```

### 3) Frontend setup

In a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend default URL: `http://localhost:3000`
Backend default URL: `http://127.0.0.1:8000`

## API Endpoints (Common)

- `POST /api/upload`
- `POST /api/analyze?file_name=<name>`
- `GET /api/report?file_name=<name>`
- `GET /api/report/<name>`
- `GET /api/dashboard/<name>`

## 🔐 Environment Variables (Secure Setup)

Create a `.env` file inside `backend/` using `backend/.env.example` as a template.

```dotenv
# Azure OpenAI
AZURE_OPENAI_KEY=your_api_key_here
AZURE_OPENAI_ENDPOINT=your_endpoint_here

# Azure Cognitive Services
AZURE_COGNITIVE_KEY=your_key_here
AZURE_COGNITIVE_ENDPOINT=your_endpoint_here

# Azure Storage
AZURE_STORAGE_ACCOUNT_NAME=your_storage_account
AZURE_STORAGE_ACCOUNT_KEY=your_storage_key
AZURE_CONTAINER_NAME=your_container
```

### ⚠️ Important Security Notes

- Never commit `.env` to GitHub
- Keep real API keys and endpoints out of source files
- Regenerate keys immediately if exposure occurs
- Use Azure Key Vault for production secret management

## 🔐 Security Best Practices

All sensitive credentials are stored securely using environment variables and are not exposed in the codebase.

- API keys are loaded from environment variables
- No hardcoded secrets in committed source files
- Sensitive configuration is excluded by `.gitignore`
- Azure service credentials are treated as private runtime secrets

## Future Security Enhancements

- Azure Key Vault integration for secret retrieval
- Token-based authentication for API access
- Role-based access control for dashboard/report operations

## Hackathon Readiness

- Professional architecture with separate frontend/backend layers
- Production-aware documentation and secure environment handling
- AI-driven value: actionable recommendations, not just raw analytics

## License

Choose and add a license before public/open-source distribution.
