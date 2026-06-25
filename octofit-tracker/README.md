# OctoFit Tracker

Modern multi-tier application scaffold for the OctoFit Tracker project.

## Ports

- Frontend: `5173`
- Backend: `8000`
- MongoDB: `27017`

## Setup

- `cd octofit-tracker/frontend && npm install`
- `cd octofit-tracker/backend && npm install`

## Run

- Frontend: `cd octofit-tracker/frontend && npm run dev`
- Backend: `cd octofit-tracker/backend && npm run dev`

## Frontend environment variables

- Create `octofit-tracker/frontend/.env.local`
- Define `VITE_CODESPACE_NAME=<your_codespace_name>` to use Codespaces-aware API URLs like:
  `https://<your_codespace_name>-8000.app.github.dev/api/[component]/`
- If `VITE_CODESPACE_NAME` is unset, the frontend safely falls back to `http://localhost:8000/api`
