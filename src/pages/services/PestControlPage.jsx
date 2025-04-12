// src/pages/services/PestControlPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BugAntIcon, ShieldCheckIcon, BeakerIcon, HomeModernIcon } from '@heroicons/react/24/outline';
import { GiWoodBeam, GiWaspSting, GiInsectJaws, GiLongAntennaeBug, GiRat, GiAnt } from "react-icons/gi"; // Game Icons
import { motion } from 'framer-motion';
import { commonPests } from '../../data/pestControlData'; // Ajusta la ruta si es necesario


// Variantes de animación (sin cambios)
const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// --- NUEVO: Componente PestCard ---
const PestCard = ({ name, description, icon: Icon, linkTo }) => {
    const content = (
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200 flex items-center gap-4 h-full transition-shadow duration-300 hover:shadow-lg">
            <Icon className="h-8 w-8 text-brand-emerald flex-shrink-0" />
            <div>
                <h3 className="font-semibold text-lg text-brand-dark">{name}</h3>
                <p className="text-sm text-brand-dark opacity-80">{description}</p>
            </div>
        </div>
    );

    return linkTo ? (
        <Link to={linkTo} className="block h-full">
            {content}
        </Link>
    ) : (
        <div className="h-full">
            {content}
        </div>
    );
};
// --- FIN NUEVO Componente ---

function PestControlPage() {
    return (
        <>
            <Helmet>
                <title>Control Integral de Plagas - Limpiezas Univer</title>
                {/* ¡Personaliza [Tu Ciudad/Área]! */}
                <meta name="description" content="Servicios profesionales de fumigación y control de plagas (cucarachas, roedores, insectos) para hogares y empresas en [Tu Ciudad/Área]. Soluciones seguras y eficaces." />
            </Helmet>

            <div className="space-y-12 md:space-y-16 overflow-x-hidden">

                {/* --- Sección Hero (sin cambios) --- */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="bg-brand-ivory rounded-lg shadow p-8 md:p-12 text-center md:text-left md:flex md:items-center md:gap-8"
                >
                    <BugAntIcon className="h-16 w-16 md:h-24 md:w-24 text-brand-emerald mx-auto md:mx-0 mb-4 md:mb-0 flex-shrink-0" />
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">Control Integral de Plagas</h1>
                        <p className="text-lg text-brand-dark opacity-80 mb-6">
                            Protege tu hogar o negocio de visitantes no deseados. Ofrecemos soluciones personalizadas, seguras y efectivas para eliminar y prevenir todo tipo de plagas.
                        </p>
                        <Link
                            to="/cotizacion"
                            className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-2 px-6 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                        >
                            Solicitar Diagnóstico y Presupuesto
                        </Link>
                    </div>
                </motion.section>

                {/* --- Sección Plagas Comunes (Usa PestCard) --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Plagas Comunes que Tratamos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Usamos el nuevo componente PestCard */}
                        {commonPests.map((pest) => (
                            <PestCard
                                key={pest.name} // Usar nombre como key (asumiendo unicidad)
                                name={pest.name}
                                description={pest.description}
                                icon={pest.icon}
                                linkTo={pest.linkTo}
                            />
                        ))}
                    </div>
                    <p className="text-center mt-6 text-brand-dark opacity-80">
                        ¿No ves la plaga que te preocupa? <Link to="/cotizacion" className="text-brand-emerald hover:underline font-medium">Consúltanos</Link>, podemos ayudarte.
                    </p>
                </motion.section>

                {/* --- Sección Nuestro Enfoque (sin cambios) --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-brand-mint p-8 rounded-lg shadow-md"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Nuestro Enfoque: Seguridad y Eficacia</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div className="flex flex-col items-center md:items-start">
                            <ShieldCheckIcon className="h-10 w-10 text-brand-emerald mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Diagnóstico Preciso</h3>
                            <p className="text-sm text-brand-dark opacity-80">Identificamos la plaga, el nivel de infestación y los puntos críticos para diseñar un plan a medida.</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <BeakerIcon className="h-10 w-10 text-brand-emerald mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Tratamientos Seguros</h3>
                            <p className="text-sm text-brand-dark opacity-80">Utilizamos productos biocidas registrados y métodos de aplicación seguros para personas, mascotas y el medio ambiente.</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <HomeModernIcon className="h-10 w-10 text-brand-emerald mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Prevención y Seguimiento</h3>
                            <p className="text-sm text-brand-dark opacity-80">Ofrecemos recomendaciones para evitar futuras infestaciones y realizamos seguimientos para garantizar la efectividad.</p>
                        </div>
                    </div>
                </motion.section>

                 {/* --- Sección CTA Específica (sin cambios) --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="text-center mt-12 pt-8 border-t border-brand-sand"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-brand-dark">¿Problemas con Plagas? Actúa Ahora</h2>
                    <p className="text-brand-dark opacity-90 mb-6 max-w-lg mx-auto">
                        No dejes que las plagas se conviertan en un problema mayor. Contacta con nuestros expertos para una solución rápida y duradera.
                    </p>
                    <Link
                        to="/cotizacion"
                        className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                    >
                        Solicitar Servicio de Control de Plagas
                    </Link>
                </motion.section>

            </div>
        </>
    );
}

export default PestControlPage;
