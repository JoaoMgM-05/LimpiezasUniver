// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'; // <-- 1. Importa HelmetProvider
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* <-- 2. Envuelve tu App */}
      <App />
    </HelmetProvider>
  </StrictMode>,
);
