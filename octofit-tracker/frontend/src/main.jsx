import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

// Frontend environment variables are exposed via Vite as import.meta.env.
// Define VITE_CODESPACE_NAME in frontend/.env.local to route API calls to the Codespaces backend.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
