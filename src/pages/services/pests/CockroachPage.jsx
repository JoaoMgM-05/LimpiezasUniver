// src/pages/services/pests/CockroachPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BugAntIcon, ExclamationTriangleIcon, ShieldCheckIcon, LightBulbIcon } from '@heroicons/react/24/outline';
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

function CockroachPage() {
    return (
        <>
            <Helmet>
                <title>Control y Eliminación de Cucarachas - Limpiezas Univer</title>
                <meta name="description" content="Servicio profesional para eliminar cucarachas (alemana, oriental, americana) en hogares y negocios de [Tu Ciudad/Área]. Tratamientos seguros y garantizados." />
                {/* <meta name="keywords" content="eliminar cucarachas, control cucarachas, fumigar cucarachas, plaga cucarachas, [Tu Ciudad]" /> */}
            </Helmet>

            <div className="space-y-12 md:space-y-16 overflow-x-hidden">

                {/* --- Sección Hero Específica --- */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="bg-brand-ivory rounded-lg shadow p-8 md:p-12 text-center md:text-left md:flex md:items-center md:gap-8"
                >
                    {/* Podrías usar una imagen específica de cucaracha (con advertencia) o mantener el icono genérico */}
                    <BugAntIcon className="h-16 w-16 md:h-24 md:w-24 text-brand-emerald mx-auto md:mx-0 mb-4 md:mb-0 flex-shrink-0" />
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">Eliminación Profesional de Cucarachas</h1>
                        <p className="text-lg text-brand-dark opacity-80 mb-6">
                            Las cucarachas son una plaga resistente y portadora de enfermedades. Ofrecemos tratamientos efectivos y seguros para erradicarlas de tu propiedad y prevenir su regreso.
                        </p>
                        <Link
                            to="/cotizacion" // Puedes añadir parámetros si quieres preseleccionar el servicio
                            className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-2 px-6 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                        >
                            Solicitar Tratamiento Cucarachas
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
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">¿Por Qué son un Problema las Cucarachas?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <ExclamationTriangleIcon className="h-8 w-8 text-red-500 mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Riesgos para la Salud</h3>
                            <p className="text-sm text-brand-dark opacity-80">Pueden transmitir bacterias y patógenos (Salmonella, E. coli), contaminar alimentos y desencadenar alergias o asma.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <BugAntIcon className="h-8 w-8 text-brand-dark opacity-70 mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Rápida Proliferación</h3>
                            <p className="text-sm text-brand-dark opacity-80">Se reproducen muy rápidamente. Una pequeña infestación puede convertirse en un gran problema en poco tiempo.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <ExclamationTriangleIcon className="h-8 w-8 text-yellow-500 mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Daño a la Reputación (Negocios)</h3>
                            <p className="text-sm text-brand-dark opacity-80">La presencia de cucarachas puede dañar gravemente la imagen de bares, restaurantes, hoteles y otros negocios.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <BugAntIcon className="h-8 w-8 text-brand-dark opacity-70 mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Resistencia</h3>
                            <p className="text-sm text-brand-dark opacity-80">Son muy resistentes y pueden sobrevivir en condiciones difíciles, requiriendo tratamientos profesionales.</p>
                        </div>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Nuestro Tratamiento Contra Cucarachas</h2>
                    <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto text-brand-dark">
                        <li>
                            <span className="font-semibold">Inspección Detallada:</span> Identificamos la especie (alemana, oriental, americana), focos de infestación y puntos de entrada/refugio.
                        </li>
                        <li>
                            <span className="font-semibold">Aplicación de Tratamiento Específico:</span> Utilizamos cebos en gel, insecticidas de baja toxicidad por pulverización o nebulización, según el caso, centrándonos en las áreas críticas.
                        </li>
                        <li>
                            <span className="font-semibold">Seguridad:</span> Aplicamos los productos siguiendo estrictas normas de seguridad, informándote de las precauciones necesarias (plazo de seguridad, ventilación).
                        </li>
                        <li>
                            <span className="font-semibold">Recomendaciones de Prevención:</span> Te asesoramos sobre medidas de higiene, sellado de grietas y almacenamiento de alimentos para evitar futuras infestaciones.
                        </li>
                        <li>
                            <span className="font-semibold">Garantía y Seguimiento:</span> Ofrecemos garantía en nuestros tratamientos y podemos programar visitas de seguimiento si es necesario.
                        </li>
                    </ol>
                </motion.section>

                {/* --- Sección Consejos de Prevención --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">Consejos para Prevenir Cucarachas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Higiene Extrema:</span> Limpia restos de comida y grasa inmediatamente. No dejes platos sucios. Saca la basura regularmente.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Almacenamiento Sellado:</span> Guarda los alimentos (incluida comida de mascotas) en recipientes herméticos.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Sellar Grietas:</span> Repara agujeros y grietas en paredes, rodapiés, alrededor de tuberías y ventanas.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Control de Humedad:</span> Repara fugas de agua y ventila bien zonas húmedas como baños y sótanos.</p>
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
                    <h2 className="text-2xl font-semibold mb-4 text-brand-dark">¿Cucarachas en Casa o Negocio? ¡Llámanos!</h2>
                    <p className="text-brand-dark opacity-90 mb-6 max-w-lg mx-auto">
                        No esperes más. Solicita una inspección y presupuesto sin compromiso para eliminar las cucarachas de forma definitiva.
                    </p>
                    <Link
                        to="/cotizacion"
                        className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                    >
                        Eliminar Cucarachas Ahora
                    </Link>
                    <p className="mt-4 text-sm text-brand-dark opacity-70">
                        O vuelve a <Link to="/servicios/control-plagas" className="text-brand-emerald hover:underline">Control de Plagas</Link>.
                    </p>
                </motion.section>

            </div>
        </>
    );
}

export default CockroachPage;
