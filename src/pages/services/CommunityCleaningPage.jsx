// src/pages/services/CommunityCleaningPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { HomeIcon, SparklesIcon, CheckBadgeIcon, MapPinIcon } from '@heroicons/react/24/outline'; // Ajusta iconos si es necesario
import { motion } from 'framer-motion';

// Variantes de animación (puedes reutilizar las mismas)
const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

function CommunityCleaningPage() {
    return (
        <>
            <Helmet>
                <title>Limpieza de Comunidades y Hogares - Limpiezas Univer</title>
                {/* ¡Personaliza [Tu Ciudad/Área]! */}
                <meta name="description" content="Servicios profesionales de limpieza para comunidades de vecinos, portales, escaleras y viviendas particulares en [Tu Ciudad/Área]." />
            </Helmet>

            <div className="space-y-12 md:space-y-16 overflow-x-hidden">

                {/* --- Sección Hero Específica --- */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="bg-brand-ivory rounded-lg shadow p-8 md:p-12 text-center md:text-left md:flex md:items-center md:gap-8"
                >
                    <HomeIcon className="h-16 w-16 md:h-24 md:w-24 text-brand-emerald mx-auto md:mx-0 mb-4 md:mb-0 flex-shrink-0" />
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">Limpieza de Comunidades y Hogares</h1>
                        <p className="text-lg text-brand-dark opacity-80 mb-6">
                            Mantenemos tus espacios comunes impecables y ofrecemos limpiezas a fondo para viviendas particulares. Adaptamos la frecuencia y tareas a tus necesidades.
                        </p>
                        <Link
                            to="/cotizacion" // Enlace a cotización general o específica
                            className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-2 px-6 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                        >
                            Solicitar Presupuesto
                        </Link>
                    </div>
                </motion.section>

                {/* --- Sección Qué Incluimos (Ejemplo) --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Nuestros Servicios Incluyen</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Añade aquí tarjetas o elementos describiendo los servicios */}
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <SparklesIcon className="h-8 w-8 text-brand-emerald mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Portales y Escaleras</h3>
                            <p className="text-sm text-brand-dark opacity-80">Limpieza de suelos, cristales, barandillas, puntos de luz, etc.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <SparklesIcon className="h-8 w-8 text-brand-emerald mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Zonas Comunes</h3>
                            <p className="text-sm text-brand-dark opacity-80">Ascensores, cuartos de contadores, patios, garajes (opcional).</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <SparklesIcon className="h-8 w-8 text-brand-emerald mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Limpieza de Hogares</h3>
                            <p className="text-sm text-brand-dark opacity-80">Limpiezas puntuales, profundas, post-mudanza o mantenimiento regular.</p>
                        </div>
                    </div>
                </motion.section>

                {/* --- Sección Beneficios (Ejemplo) --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-brand-mint p-8 rounded-lg shadow-md"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Ventajas de Elegirnos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div className="flex flex-col items-center md:items-start">
                            <CheckBadgeIcon className="h-10 w-10 text-brand-emerald mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Profesionalidad</h3>
                            <p className="text-sm text-brand-dark opacity-80">Personal cualificado, productos adecuados y supervisión.</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <MapPinIcon className="h-10 w-10 text-brand-emerald mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Flexibilidad</h3>
                            <p className="text-sm text-brand-dark opacity-80">Nos adaptamos a horarios y frecuencias que mejor te convengan.</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <CheckBadgeIcon className="h-10 w-10 text-brand-emerald mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Confianza</h3>
                            <p className="text-sm text-brand-dark opacity-80">Empresa registrada, seguros de responsabilidad civil.</p>
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
                    <h2 className="text-2xl font-semibold mb-4 text-brand-dark">¿Tu Comunidad o Hogar Necesita Limpieza?</h2>
                    <p className="text-brand-dark opacity-90 mb-6 max-w-lg mx-auto">
                        Pídenos presupuesto sin compromiso y descubre cómo podemos ayudarte a mantener tus espacios limpios y agradables.
                    </p>
                    <Link
                        to="/cotizacion"
                        className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                    >
                        Pedir Presupuesto Ahora
                    </Link>
                    <p className="mt-4 text-sm text-brand-dark opacity-70">
                        O vuelve a <Link to="/servicios" className="text-brand-emerald hover:underline">Nuestros Servicios</Link>.
                    </p>
                </motion.section>

            </div>
        </>
    );
}

export default CommunityCleaningPage;
