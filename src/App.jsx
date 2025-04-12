// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import QuotePage from "./pages/QuotePage";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import OfficeCleaningPage from './pages/services/OfficeCleaningPage';
import PestControlPage from './pages/services/PestControlPage';
// 1. Importa el nuevo componente de página para cucarachas (lo crearemos a continuación)
import CockroachPage from './pages/services/pests/CockroachPage'; // Nota la nueva carpeta 'pests'

function App() {
  return (
    <Router>
      <Layout> {/* Layout envuelve las rutas */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />

          {/* Rutas de Servicios Específicos */}
          <Route path="/servicios/limpieza-oficinas" element={<OfficeCleaningPage />} />
          <Route path="/servicios/control-plagas" element={<PestControlPage />} />
          {/* 2. Añade la nueva ruta específica para cucarachas */}
          <Route path="/servicios/control-plagas/cucarachas" element={<CockroachPage />} />
          {/* Aquí añadirás rutas para otras plagas específicas, ej: */}
          {/* <Route path="/servicios/control-plagas/roedores" element={<RoedoresPage />} /> */}

          <Route path="/cotizacion" element={<QuotePage />} />
          <Route path="/sobre-nosotros" element={<AboutPage />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />

          {/* Considera añadir una ruta 404 */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
