// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout y Páginas Principales (sin cambios)
import Layout from "./components/layout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import QuotePage from "./pages/QuotePage";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import NotFoundPage from './pages/NotFoundPage'; // Asegúrate que esta esté importada

// Páginas de Servicios de Limpieza
import OfficeCleaningPage from './pages/services/OfficeCleaningPage';
// --- NUEVAS IMPORTACIONES ---
import CommunityCleaningPage from './pages/services/CommunityCleaningPage';
import SpecialCleaningPage from './pages/services/SpecialCleaningPage';
import EndOfWorkCleaningPage from './pages/services/EndOfWorkCleaningPage';
// --- FIN NUEVAS IMPORTACIONES ---

// Páginas de Control de Plagas
import PestControlPage from './pages/services/PestControlPage';
import CockroachPage from './pages/services/pests/CockroachPage';
// --- NUEVAS IMPORTACIONES ---
import RodentPage from './pages/services/pests/RodentPage';
import AntPage from './pages/services/pests/AntPage';
import BedBugPage from './pages/services/pests/BedBugPage'; // O como hayas llamado al archivo
import WaspPage from './pages/services/pests/WaspPage';
import WoodPestPage from './pages/services/pests/WoodPestPage'; // O como hayas llamado al archivo
// --- FIN NUEVAS IMPORTACIONES ---


function App() {
  return (
    <Router>
      <Layout> {/* Layout envuelve las rutas */}
        <Routes>
          {/* Rutas Principales (sin cambios) */}
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/cotizacion" element={<QuotePage />} />
          <Route path="/sobre-nosotros" element={<AboutPage />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />

          {/* Rutas de Servicios de Limpieza */}
          <Route path="/servicios/limpieza-oficinas" element={<OfficeCleaningPage />} />
          {/* --- NUEVAS RUTAS --- */}
          <Route path="/servicios/limpieza-comunidades" element={<CommunityCleaningPage />} />
          <Route path="/servicios/limpiezas-especiales" element={<SpecialCleaningPage />} />
          <Route path="/servicios/limpieza-fin-obra" element={<EndOfWorkCleaningPage />} />
          {/* --- FIN NUEVAS RUTAS --- */}

          {/* Rutas de Control de Plagas */}
          <Route path="/servicios/control-plagas" element={<PestControlPage />} />
          <Route path="/servicios/control-plagas/cucarachas" element={<CockroachPage />} />
          {/* --- NUEVAS RUTAS --- */}
          <Route path="/servicios/control-plagas/roedores" element={<RodentPage />} />
          <Route path="/servicios/control-plagas/hormigas" element={<AntPage />} />
          <Route path="/servicios/control-plagas/chinches" element={<BedBugPage />} />
          <Route path="/servicios/control-plagas/avispas" element={<WaspPage />} />
          <Route path="/servicios/control-plagas/madera" element={<WoodPestPage />} />
          {/* --- FIN NUEVAS RUTAS --- */}

          {/* Ruta 404 (al final) */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
