# Expelexia Backend Setup

## 1) Create environment file

Copy the template and fill in your real Azure credentials:

```powershell
Copy-Item backend/.env.example backend/.env
```

Required values are already listed in `backend/.env.example`:

- `AZURE_STORAGE_ACCOUNT_NAME`
- `AZURE_STORAGE_ACCOUNT_KEY`
- `AZURE_CONTAINER_NAME`
- `AZURE_REPORTS_CONTAINER_NAME`
- `AZURE_OPENAI_ENDPOINT` + `AZURE_OPENAI_KEY` (or `FOUNDRY_ENDPOINT` + `FOUNDRY_API_KEY`)
- `AZURE_COGNITIVE_ENDPOINT`
- `AZURE_COGNITIVE_KEY`

Do not commit `backend/.env` to source control.

## 2) Start backend

From project root:

```powershell
cd backend
.venv/Scripts/python.exe -m uvicorn main:app --reload --port 8000
```

Important on Windows:

- Use `python` or `.venv/Scripts/python.exe`.
- Do **not** run `.python.exe` (that command does not exist).
- Use the backend virtual env `backend/.venv`.

## 3) Quick health checks

- Root: `GET http://127.0.0.1:8000/`
- OpenAPI: `GET http://127.0.0.1:8000/openapi.json`

Main API routes:

- `POST /api/upload`
- `POST /api/analyze?file_name=<name>`
- `GET /api/report?file_name=<name>`
- `GET /api/report/<name>`
- `GET /api/report/download?file_name=<name>` (returns binary PDF download)

Note:

- `/api/report` returns JSON containing `pdf_url`.
- `/api/report/download` returns the actual PDF file (`application/pdf`).

## 4) Run full smoke check yourself

From project root:

```powershell
cd backend
.venv/Scripts/python.exe smoke_check.py
```

Expected result: route checks show `OK` and endpoint status lines return `200`.

## 5) Notes

- Report upload container is auto-created if missing.
- `ai_service.py` supports both `AZURE_OPENAI_*` and `FOUNDRY_*` env naming.

## 6) PDF report format (vendor-neutral)

Generated reports are now general-purpose and data-focused (no vendor-specific branding language).

Included sections:

- Executive Summary
- Data Overview
- Website Dashboard Alignment
- Visual Analysis
- Data Change Explanation
- Key Findings
- AI-Powered Insights
- Technical Review (Advanced)
- Technical Recommendations (Advanced)
- Special AI Recommendations
- Confidence & Reliability
- Document Notes
- Appendix (when markdown table content is available)
- Detailed Data Table
- References (APA 7th Edition)

PDF layout improvements:

- Table cells wrap safely to avoid overflow outside page boundaries.
- Long sections are split into readable paragraphs.
- Multi-page tables repeat headers for readability.

## 7) Troubleshooting (Windows)

If you see errors like `ModuleNotFoundError: No module named 'pydantic_core._pydantic_core'`:

```powershell
# from project root
Set-Location backend

# leave any current env
deactivate

# activate the correct root env
.venv/Scripts/Activate.ps1

# run backend with the same interpreter
.venv/Scripts/python.exe -m uvicorn main:app --reload --port 8000
```

If a root `.venv` was created accidentally, remove it to avoid confusion:

```powershell
# from project root
Remove-Item -Recurse -Force .venv
```
