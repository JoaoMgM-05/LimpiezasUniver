// src/pages/QuotePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/contactform'; // Asegúrate que la ruta es correcta
import ContactCard from '../components/contactcard'; // Asegúrate que la ruta es correcta
import { XMarkIcon } from '@heroicons/react/24/outline';

function QuotePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Comprobar si el modal ya se mostró en esta sesión
        const modalShown = sessionStorage.getItem('privacyModalShown');
        if (!modalShown) {
            // Mostrar el modal después de un breve retraso para no ser intrusivo
            const timer = setTimeout(() => {
                setIsModalOpen(true);
            }, 1500); // 1.5 segundos de retraso
            return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
        }
    }, []);

    const handleAcceptPrivacy = () => {
        sessionStorage.setItem('privacyModalShown', 'true'); // Marcar como mostrado en esta sesión
        setIsModalOpen(false);
    };

    const handleCloseModal = () => {
        // Opcional: podrías marcarlo como mostrado incluso si solo lo cierran
        // sessionStorage.setItem('privacyModalShown', 'true');
        setIsModalOpen(false);
    };

    return (
        <> {/* Envuelve en Fragment para Helmet y el Modal */}
            <Helmet>
                {/* Mueve las etiquetas aquí */}
                <title>Contacto y Cotización - Limpiezas Univer</title>
                <meta name="description" content="Contacta con Limpiezas Univer para solicitar una cotización personalizada para nuestros servicios de limpieza y control de plagas." />
                {/* Puedes añadir noindex si prefieres que esta página no se indexe directamente */}
                {/* <meta name="robots" content="noindex, follow" /> */}
            </Helmet>

            {/* --- MODAL DE PRIVACIDAD --- */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="privacy-modal-title"
                >
                    <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            aria-label="Cerrar modal"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                        <h2 id="privacy-modal-title" className="text-xl font-semibold text-brand-dark mb-3">Aviso de Privacidad</h2>
                        <p className="text-sm text-brand-dark opacity-80 mb-4">
                            Para procesar tu solicitud de cotización, necesitamos recoger tus datos de contacto. Al continuar, aceptas nuestra{' '}
                            <Link to="/politica-privacidad" className="text-brand-emerald hover:underline" target="_blank" rel="noopener noreferrer">
                                Política de Privacidad
                            </Link>.
                        </p>
                        <button
                            onClick={handleAcceptPrivacy}
                            className="w-full bg-brand-emerald hover:bg-brand-deep-forest text-white font-medium py-2 px-4 rounded-md transition duration-300"
                        >
                            Entendido y Aceptar
                        </button>
                    </div>
                </div>
            )}

            {/* --- Contenido de la Página de Cotización --- */}
            <div className="container mx-auto px-4 py-8 md:py-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-brand-dark text-center">Contacto y Cotización</h1>
                <p className="text-center text-brand-dark opacity-90 mb-10 max-w-xl mx-auto">
                    Rellena el formulario o utiliza nuestros datos de contacto. ¡Te responderemos lo antes posible!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
                    {/* Columna del Formulario */}
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
                        <h2 className="text-2xl font-semibold text-brand-dark mb-6">Solicita tu presupuesto</h2>
                        <ContactForm />
                    </div>

                    {/* Columna de la Tarjeta de Contacto */}
                    <div className="flex justify-center md:justify-start"> {/* Centra la tarjeta en móvil */}
                        <ContactCard />
                    </div>
                </div>
            </div>
        </> // Cierra el Fragment
    );
}

export default QuotePage;
