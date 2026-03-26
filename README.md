# Expelexia Lab

Expelexia Lab is an AI-powered data analysis platform designed to automatically analyze data and generate intelligent, human-friendly recommendations to support better decision-making.


## Why Expelexia Lab

- Enables fast AI-assisted analysis of CSV and PDF files.
- Generates clear summaries, dashboards, and visual insights.
- Produces professional PDF reports with actionable recommendations.
- Supports better decision-making through explainable, human-readable outputs.


## Core Capabilities

- **Data Upload & Processing**: Supports multiple dataset types and document inputs.
- **AI Analysis**: Generates narrative insights from processed data.
- **Recommendation Engine**: Provides practical, decision-oriented suggestions.
- **Dashboard Data API**: Supplies data for front-end charts and summary views.
- **Report Generation**: Creates polished PDF reports.


## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- FastAPI
- Python

### AI & Cloud Services
- Azure OpenAI
- Azure Cognitive Services
- Azure Storage


## Project Structure

### File Structure

```plaintext
LICENSE
README.md
backend/
    main.py
    requirements.txt
    smoke_check.py
    models/
        schemas.py
    routes/
        analyze.py
        dashboard.py
        report.py
        upload.py
    services/
        ai_service.py
        azure_blob_service.py
        data_service.py
        report_pdf_service.py
        report_service.py
        safety.py
    utils/
        helpers.py
data/
    processed/
        *.csv_summary.json
    raw/
        *.csv
    reports/
    temp/
docs/
    presentation file and video link
frontend/
    components/
    pages/
    public/
    styles/
    utils/
```


### Ignored Files

The following files and directories are excluded from version control:

- `.env` files: Contain sensitive environment variables.
- `node_modules/`: Contains dependencies installed via npm.
- `.venv/`: Python virtual environment files.
- `.next/`: Build artifacts for Next.js.
- `__pycache__/`: Python cache files.


## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Adam-7th/Expelexia.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Expelexia
   ```

3. Configure the backend:
   ```bash
   cd backend
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\Activate.ps1
   pip install -r requirements.txt
   ```

4. Configure the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

5. Start the project:
   - Backend: `uvicorn main:app --reload`
   - Frontend: `npm run dev`


## Notes

- Python 3.9+ and Node.js must be installed.
- Replace `.env` files with appropriate environment variables.
- Large files (e.g., `.venv`, `node_modules`) are excluded to reduce repository size.


## Quick Start

### Clone the Repository

```bash
git clone https://github.com/Adam-7th/Expelexia.git
cd Expelexia
```

### Backend Configuration

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate   # Windows PowerShell
pip install -r requirements.txt
```

Start the backend:

```bash
.venv\Scripts\python.exe -m uvicorn main:app --reload --port 8000
```

### Frontend Configuration

Open a separate terminal and execute the following commands:

```bash
cd frontend
npm install
npm run dev
```

The frontend is accessible at `http://localhost:3000`. The backend is accessible locally at `http://127.0.0.1:8000`.


## Hosted Backend

The backend API is also hosted on Render and can be accessed at:
[https://backend-update-1-uloa.onrender.com/api](https://backend-update-1-uloa.onrender.com/api)

You can use the hosted backend for testing or switch to the local setup as needed.


## API Endpoints (Common)

- `POST /api/upload`
- `POST /api/analyze?file_name=<name>`
- `GET /api/report?file_name=<name>`
- `GET /api/report/<name>`
  


## Environment Variables (Secure Setup)

Create a `.env` file inside `backend/` using `backend/.env.example` as a template.

```dotenv
# Azure OpenAI
AZURE_OPENAI_KEY=your_api_key_here
AZURE_OPENAI_ENDPOINT=User_endpoint_here

# Azure Cognitive Services
AZURE_COGNITIVE_KEY=User_key_here
AZURE_COGNITIVE_ENDPOINT=User_endpoint_here

# Azure Storage
AZURE_STORAGE_ACCOUNT_NAME=User_storage_account
AZURE_STORAGE_ACCOUNT_KEY=User_storage_key
AZURE_CONTAINER_NAME=User_container
```


## Important Security Notes

- Never commit `.env` to GitHub.
- Keep real API keys and endpoints out of source files.
- Regenerate keys immediately if exposure occurs.
- Use Azure Key Vault for production secret management.


## Security Best Practices

All sensitive credentials are stored securely using environment variables and are not exposed in the source code.

- API keys are loaded from environment variables.
- No hardcoded secrets in committed source files.
- Sensitive configuration is excluded by `.gitignore`.
- Azure service credentials are treated as private runtime secrets.


## Future Security Enhancements

- Azure Key Vault integration for secret retrieval.
- Token-based authentication for API access.
- Role-based access control for dashboard/report operations.


## Hackathon Readiness

- Professional architecture with separate frontend/backend layers.
- Production-aware documentation and secure environment handling.
- AI-driven value: actionable recommendations, not just raw analytics.


## Team Information
""Our team, NeuraForge, brings together highly skilled and diverse professionals with a strong background in AI, cloud computing, full-stack development, and data analytics. Each member has hands-on experience from internships, research, and projects in both academic and professional settings. Our combined technical proficiency, logical problem-solving, and collaborative mindset make us capable of solving complex AI challenges effectively. We are committed to delivering innovative solutions during the challenge.""
### Team Members

#### Henok Tariku
- **Role**: Junior Data Analyst & Software Engineer
- **Education**:
  - WorldQuant University (Financial Engineering, Feb 2026 - Present)
  - MIPT (Computer Science, Nov 2025 - Present)
  - University of the People (Computer Science, Dec 2023 - Jan 2026, CGPA 3.95)
- **Focus**: Practical software engineering, API integrations, and reliable production rollouts.
- **LinkedIn**: [Henok Tariku](https://www.linkedin.com/in/henok-tariku1012/)

#### Rocio Herrera
- **Role**: Cybersecurity & AI Enthusiast
- **Skills**: Cybersecurity, Artificial Intelligence, Problem Solving, Data Analysis, Risk Assessment
- **Location**: USA


## Built for Microsoft Hackathon

### Design
- Clean, modern, company-style AI product narrative with strong motion design, research, and user focus.

### Core Values
- Responsible AI by design.
- Clear and auditable next-step reasoning.
- Modular architecture for fast expansion.
- Research-first user experience.


## Project Website

The Expelexia Lab project website is live and accessible at:
[Expelexia AI Lab](https://expelexialab.netlify.app/)

This website provides an interactive interface for users to explore the features of Expelexia Lab, including:

- Uploading and analyzing data files.
- Generating AI-driven insights and reports.
- Visualizing data through dashboards and charts.

Visit the website to experience the full functionality of the Expelexia Lab platform.
