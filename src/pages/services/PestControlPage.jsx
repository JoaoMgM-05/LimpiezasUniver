// src/pages/services/PestControlPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BugAntIcon, ShieldCheckIcon, BeakerIcon, HomeModernIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
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

// Datos de ejemplo para plagas comunes (añade linkTo cuando crees las páginas)
const commonPests = [
    { name: "Cucarachas", description: "Tratamientos efectivos contra todas las especies comunes.", icon: BugAntIcon /* O un icono más específico */, linkTo: "/servicios/control-plagas/cucarachas" },
    { name: "Roedores (Ratas y Ratones)", description: "Soluciones de desratización seguras y discretas.", icon: BugAntIcon, linkTo: "/servicios/control-plagas/roedores" },
    { name: "Hormigas", description: "Control de invasiones en interiores y exteriores.", icon: BugAntIcon, linkTo: "/servicios/control-plagas/hormigas" },
    { name: "Chinches de Cama", description: "Tratamientos especializados para su erradicación.", icon: BugAntIcon, linkTo: "/servicios/control-plagas/chinches" },
    { name: "Avispas y Abejas", description: "Retirada segura de nidos y control.", icon: BugAntIcon, linkTo: "/servicios/control-plagas/avispas" },
    { name: "Termitas y Carcoma", description: "Tratamientos preventivos y curativos para la madera.", icon: BugAntIcon, linkTo: "/servicios/control-plagas/madera" },
    // Añade otras plagas relevantes (moscas, mosquitos, pulgas, etc.)
];

function PestControlPage() {
    return (
        <>
            <Helmet>
                <title>Control Integral de Plagas - Limpiezas Univer</title>
                <meta name="description" content="Servicios profesionales de fumigación y control de plagas (cucarachas, roedores, insectos) para hogares y empresas en [Tu Ciudad/Área]. Soluciones seguras y eficaces." />
                {/* <meta name="keywords" content="control de plagas, fumigación, desinsectación, desratización, cucarachas, roedores, [Tu Ciudad]" /> */}
            </Helmet>

            <div className="space-y-12 md:space-y-16 overflow-x-hidden">

                {/* --- Sección Hero Específica --- */}
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

                {/* --- Sección Plagas Comunes --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Plagas Comunes que Tratamos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {commonPests.map((pest) => (
                            // Envolvemos en Link si tiene linkTo
                            pest.linkTo ? (
                                <Link key={pest.name} to={pest.linkTo} className="block hover:shadow-lg transition-shadow duration-300 rounded-lg">
                                    <div className="bg-white p-6 rounded-lg shadow border border-gray-200 flex items-center gap-4 h-full">
                                        <pest.icon className="h-8 w-8 text-brand-emerald flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg text-brand-dark">{pest.name}</h3>
                                            <p className="text-sm text-brand-dark opacity-80">{pest.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div key={pest.name} className="bg-white p-6 rounded-lg shadow border border-gray-200 flex items-center gap-4 h-full">
                                    <pest.icon className="h-8 w-8 text-brand-emerald flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg text-brand-dark">{pest.name}</h3>
                                        <p className="text-sm text-brand-dark opacity-80">{pest.description}</p>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                    <p className="text-center mt-6 text-brand-dark opacity-80">
                        ¿No ves la plaga que te preocupa? <Link to="/cotizacion" className="text-brand-emerald hover:underline font-medium">Consúltanos</Link>, podemos ayudarte.
                    </p>
                </motion.section>

                {/* --- Sección Nuestro Enfoque --- */}
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
                            <HomeModernIcon className="h-10 w-10 text-brand-emerald mb-3" /> {/* O BuildingOfficeIcon */}
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Prevención y Seguimiento</h3>
                            <p className="text-sm text-brand-dark opacity-80">Ofrecemos recomendaciones para evitar futuras infestaciones y realizamos seguimientos para garantizar la efectividad.</p>
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
