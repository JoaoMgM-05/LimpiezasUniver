// src/pages/services/pests/RodentPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// Usa el icono específico que ya importaste en PestControlPage
import { GiRat } from "react-icons/gi";
import { ExclamationTriangleIcon, ShieldCheckIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

// Variantes de animación
const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

function RodentPage() {
    return (
        <>
            <Helmet>
                <title>Control y Eliminación de Roedores (Ratas y Ratones) - Limpiezas Univer</title>
                {/* ¡Personaliza [Tu Ciudad/Área]! */}
                <meta name="description" content="Servicio profesional de desratización para eliminar ratas y ratones en hogares, negocios y comunidades en [Tu Ciudad/Área]. Métodos seguros y discretos." />
            </Helmet>

            <div className="space-y-12 md:space-y-16 overflow-x-hidden">

                {/* --- Sección Hero Específica --- */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="bg-brand-ivory rounded-lg shadow p-8 md:p-12 text-center md:text-left md:flex md:items-center md:gap-8"
                >
                    <GiRat className="h-16 w-16 md:h-24 md:w-24 text-brand-emerald mx-auto md:mx-0 mb-4 md:mb-0 flex-shrink-0" />
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">Control Profesional de Roedores</h1>
                        <p className="text-lg text-brand-dark opacity-80 mb-6">
                            Las ratas y ratones no solo causan daños materiales, sino que también transmiten enfermedades. Ofrecemos soluciones efectivas y discretas para su eliminación y prevención.
                        </p>
                        <Link
                            to="/cotizacion"
                            className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-2 px-6 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                        >
                            Solicitar Tratamiento Roedores
                        </Link>
                    </div>
                </motion.section>

                {/* --- Sección Problemas y Riesgos --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">Riesgos Asociados a los Roedores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <ExclamationTriangleIcon className="h-8 w-8 text-red-500 mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Transmisión de Enfermedades</h3>
                            <p className="text-sm text-brand-dark opacity-80">Pueden portar Hantavirus, Leptospirosis, Salmonelosis, etc., a través de orina, heces o mordeduras.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <ExclamationTriangleIcon className="h-8 w-8 text-yellow-500 mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Daños Materiales</h3>
                            <p className="text-sm text-brand-dark opacity-80">Roen cables (riesgo de incendio), tuberías, madera, aislamiento, contaminan alimentos almacenados.</p>
                        </div>
                        {/* Puedes añadir más riesgos si lo ves necesario */}
                    </div>
                </motion.section>

                {/* --- Sección Nuestro Tratamiento --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-brand-mint p-8 rounded-lg shadow-md"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Nuestro Proceso de Desratización</h2>
                    <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto text-brand-dark">
                        <li><span className="font-semibold">Inspección Exhaustiva:</span> Localizamos puntos de entrada, nidos, rutas y signos de actividad.</li>
                        <li><span className="font-semibold">Plan de Acción Personalizado:</span> Seleccionamos los métodos más adecuados (portacebos de seguridad, trampas, etc.).</li>
                        <li><span className="font-semibold">Instalación Segura:</span> Colocamos los dispositivos de forma estratégica y segura para niños y mascotas.</li>
                        <li><span className="font-semibold">Seguimiento y Mantenimiento:</span> Realizamos visitas periódicas para revisar capturas, reponer cebos y ajustar el plan.</li>
                        <li><span className="font-semibold">Recomendaciones de Prevención:</span> Te asesoramos sobre cómo evitar futuras infestaciones (sellado, orden, etc.).</li>
                    </ol>
                </motion.section>

                {/* --- Sección Consejos de Prevención --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                     <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">Consejos para Prevenir Roedores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Sellar Entradas:</span> Tapa agujeros y grietas en paredes, cimientos, techos, alrededor de tuberías.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Eliminar Fuentes de Comida:</span> Guarda alimentos en recipientes herméticos, limpia restos y no dejes comida de mascotas fuera.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Mantener Orden:</span> Reduce lugares de refugio eliminando desorden en interiores y exteriores (leña, escombros).</p>
                        </div>
                         <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Podar Vegetación:</span> Mantén árboles y arbustos podados y alejados de la estructura del edificio.</p>
                        </div>
                    </div>
                </motion.section>

                {/* --- Sección CTA Específica --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="text-center mt-12 pt-8 border-t border-brand-sand"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-brand-dark">¿Sospechas de Ratas o Ratones?</h2>
                    <p className="text-brand-dark opacity-90 mb-6 max-w-lg mx-auto">
                        Actúa rápido para evitar que la infestación crezca. Contáctanos para una inspección y presupuesto detallado.
                    </p>
                    <Link
                        to="/cotizacion"
                        className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                    >
                        Eliminar Roedores Ahora
                    </Link>
                    <p className="mt-4 text-sm text-brand-dark opacity-70">
                        O vuelve a <Link to="/servicios/control-plagas" className="text-brand-emerald hover:underline">Control de Plagas</Link>.
                    </p>
                </motion.section>

            </div>
        </>
    );
}

export default RodentPage;
