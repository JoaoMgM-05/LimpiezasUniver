// src/components/service.jsx  <-- Nombre de archivo cambiado
import React from 'react';
import { Link } from 'react-router-dom';
import { DocumentTextIcon, SparklesIcon, BuildingOfficeIcon, BugAntIcon, CubeIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

// Renombramos la función del componente
function Service() {
    // Podrías controlar su visibilidad con estado en un componente padre
    return (
        // Aplicamos colores de marca: fondo beige, texto oscuro
        <aside className="bg-brand-beige w-64 p-4 space-y-4 h-screen sticky top-0 overflow-y-auto">
            <h3 className="text-lg font-semibold text-brand-dark">Navegación Rápida</h3> {/* Título oscuro */}
            <nav className="flex flex-col space-y-1"> {/* Reducimos un poco el space-y */}
                {/* Enlaces con texto oscuro, hover con fondo mint y texto deep-forest */}
                <Link to="/formularios" className="flex items-center space-x-2 text-brand-dark opacity-80 hover:opacity-100 hover:text-brand-deep-forest hover:bg-brand-mint p-2 rounded transition-colors duration-200">
                    <DocumentTextIcon className="h-5 w-5" />
                    <span>Formularios</span>
                </Link>
                <Link to="/servicios/limpieza-hogar" className="flex items-center space-x-2 text-brand-dark opacity-80 hover:opacity-100 hover:text-brand-deep-forest hover:bg-brand-mint p-2 rounded transition-colors duration-200">
                    <SparklesIcon className="h-5 w-5" />
                    <span>Limpieza Hogar</span>
                </Link>
                <Link to="/servicios/fumigacion-residencial" className="flex items-center space-x-2 text-brand-dark opacity-80 hover:opacity-100 hover:text-brand-deep-forest hover:bg-brand-mint p-2 rounded transition-colors duration-200">
                    <BugAntIcon className="h-5 w-5" />
                    <span>Fumigación Residencial</span>
                </Link>
                <Link to="/servicios/limpieza-oficinas" className="flex items-center space-x-2 text-brand-dark opacity-80 hover:opacity-100 hover:text-brand-deep-forest hover:bg-brand-mint p-2 rounded transition-colors duration-200">
                    <BuildingOfficeIcon className="h-5 w-5" />
                    <span>Limpieza Oficinas</span>
                </Link>
                <Link to="/servicios/fumigacion-comercial" className="flex items-center space-x-2 text-brand-dark opacity-80 hover:opacity-100 hover:text-brand-deep-forest hover:bg-brand-mint p-2 rounded transition-colors duration-200">
                    <BugAntIcon className="h-5 w-5" />
                    <span>Fumigación Comercial</span>
                </Link>
                <Link to="/paquetes" className="flex items-center space-x-2 text-brand-dark opacity-80 hover:opacity-100 hover:text-brand-deep-forest hover:bg-brand-mint p-2 rounded transition-colors duration-200">
                    <CubeIcon className="h-5 w-5" />
                    <span>Paquetes</span>
                </Link>
                <Link to="/informacion" className="flex items-center space-x-2 text-brand-dark opacity-80 hover:opacity-100 hover:text-brand-deep-forest hover:bg-brand-mint p-2 rounded transition-colors duration-200">
                    <InformationCircleIcon className="h-5 w-5" />
                    <span>Zona de Información</span>
                </Link>
            </nav>
        </aside>
    );
}

// Actualizamos el export default
export default Service;
