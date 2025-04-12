// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet-async';

function NotFoundPage() {
    return (
        <>
            <Helmet>
                <title>Página No Encontrada (404) - Limpiezas Univer</title>
                <meta name="description" content="La página que buscas no existe o ha sido movida." />
            </Helmet>
            <div className="flex flex-col items-center justify-center text-center py-20">
                <ExclamationTriangleIcon className="h-16 w-16 text-red-500 mb-4" />
                <h1 className="text-4xl font-bold text-brand-dark mb-2">Error 404</h1>
                <p className="text-xl text-brand-dark opacity-80 mb-6">Página no encontrada</p>
                <p className="text-brand-dark opacity-90 mb-8 max-w-md">
                    Lo sentimos, la página que estás buscando no existe, ha sido eliminada o la dirección es incorrecta.
                </p>
                <Link
                    to="/"
                    className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-2 px-6 rounded-lg transition duration-300 shadow hover:shadow-lg"
                >
                    Volver a la Página Principal
                </Link>
            </div>
        </>
    );
}

export default NotFoundPage;
