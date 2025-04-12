// src/pages/ServicesPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
    PhoneArrowUpRightIcon, ClipboardDocumentCheckIcon, CalculatorIcon, CogIcon, CheckCircleIcon,
    BuildingOffice2Icon, HomeIcon, BugAntIcon, SparklesIcon, TrashIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Datos de servicios (sin cambios)
const cleaningServices = [
    { id: "office", icon: BuildingOffice2Icon, title: "Limpieza de Oficinas y Empresas", description: "Mantenimiento integral y personalizado para oficinas, locales comerciales y empresas.", methods: ["Limpieza diaria/semanal", "Mobiliario y equipos", "Aseos", "Cristales", "Suelos"], imageUrl: "https://picsum.photos/seed/oficinas/400/200", linkTo: "/servicios/limpieza-oficinas" },
    { id: "community", icon: HomeIcon, title: "Limpieza de Comunidades y Hogares", description: "Servicios adaptados para portales, escaleras, zonas comunes y viviendas particulares.", methods: ["Portales y escaleras", "Ascensores", "Limpieza profunda", "Post-mudanza"], imageUrl: "https://picsum.photos/seed/hogares/400/200", /* linkTo: "/servicios/limpieza-comunidades" */ },
    { id: "special", icon: SparklesIcon, title: "Limpiezas Especiales", description: "Soluciones para necesidades específicas: cristales en altura, tratamiento de suelos, tapicerías.", methods: ["Cristales en altura", "Pulido suelos", "Moquetas", "Garajes"], imageUrl: "https://picsum.photos/seed/especiales/400/200", /* linkTo: "/servicios/limpiezas-especiales" */ },
    { id: "endofwork", icon: TrashIcon, title: "Limpieza Fin de Obra", description: "Dejamos tu espacio nuevo o reformado completamente limpio y listo para usar.", methods: ["Eliminación polvo fino", "Restos pintura/yeso", "Ventanas", "Desinfección"], imageUrl: "https://picsum.photos/seed/finobra/400/200", /* linkTo: "/servicios/limpieza-fin-obra" */ }
];

const pestControlServices = [
    { id: "generalpests", icon: BugAntIcon, title: "Control Integral de Plagas", description: "Soluciones efectivas y seguras contra insectos, roedores y otras plagas comunes.", methods: ["Desinsectación", "Desratización", "Prevención", "Diagnóstico"], imageUrl: "https://picsum.photos/seed/plagas/400/200", linkTo: "/servicios/control-plagas" },
    // { id: "cockroaches", icon: BugAntIcon, title: "Eliminación de Cucarachas", description: "Tratamientos específicos para erradicar cucarachas de forma segura.", methods: ["Gel cebo", "Pulverización", "Seguimiento"], imageUrl: "https://picsum.photos/seed/cucarachas/400/200", linkTo: "/servicios/control-plagas/cucarachas" },
];

// Componente ServiceCardWithLink (sin cambios)
const ServiceCardWithLink = ({ icon: Icon, title, description, methods, imageUrl, linkTo, className = "" }) => {
    const cardContent = (
        <div className="bg-white rounded-lg shadow group hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col h-full">
            <div className="overflow-hidden">
                <img
                    src={imageUrl}
                    alt={`Servicio de ${title}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                    {Icon && <Icon className="h-8 w-8 text-brand-emerald mr-3 flex-shrink-0" />}
                    <h2 className="text-xl font-semibold text-brand-dark group-hover:text-brand-forest transition-colors duration-300">{title}</h2>
                </div>
                <p className="text-brand-dark opacity-80 mb-4 flex-grow">{description}</p>
                {methods && methods.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-gray-100">
                        <h3 className="font-medium text-brand-dark mb-2 text-sm">Incluye:</h3>
                        <ul className="list-disc list-inside text-brand-dark opacity-70 text-sm space-y-1">
                            {methods.map((method, i) => (
                                <li key={i}>{method}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );

    const motionWrapper = (content) => (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="h-full"
        >
            {content}
        </motion.div>
    );

    const containerClassName = `block h-full ${className}`;

    return linkTo
        ? <Link to={linkTo} className={containerClassName}>{motionWrapper(cardContent)}</Link>
        : <div className={containerClassName.replace('block', '')}>{motionWrapper(cardContent)}</div>;
};


// Variantes de animación (sin cambios)
const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

function ServicesPage() {
    return (
        <>
            <Helmet>
                <title>Nuestros Servicios - Limpieza y Control de Plagas - Limpiezas Univer</title>
                <meta name="description" content="Explora nuestros servicios profesionales de limpieza (oficinas, comunidades, especiales) y control de organismos nocivos (plagas) en [Tu Ciudad/Área]." />
            </Helmet>

            <div className="space-y-12 md:space-y-16">
                {/* Sección Título General - Con fondo degradado */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                    // Añadimos el fondo degradado y padding
                    className="pt-12 pb-8 bg-gradient-to-b from-brand-ivory via-brand-ivory to-transparent"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark text-center">Nuestros Servicios</h1>
                    <p className="text-center text-brand-dark opacity-90 mb-10 max-w-2xl mx-auto">
                        Ofrecemos soluciones integrales adaptadas a tus necesidades, tanto en limpieza profesional como en control efectivo de plagas. Explora nuestras categorías a continuación.
                    </p>

                </motion.section>

                {/* --- SECCIÓN: Limpieza Profesional --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="pt-8"
                >
                    {/* Título de sección mejorado con nuevo icono */}
                    <div className="flex items-center justify-center gap-3 mb-10">
                        {/* Cambiamos el icono a SparklesIcon */}
                        <SparklesIcon className="h-8 w-8 text-yellow-300" />
                        <h2 className="text-2xl md:text-3xl font-semibold text-brand-dark text-center">
                            Limpieza Profesional
                        </h2>
                        <SparklesIcon className="h-8 w-8 text-yellow-300 -scale-x-100" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cleaningServices.map((service) => (
                            <ServiceCardWithLink
                                key={service.id}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                methods={service.methods}
                                imageUrl={service.imageUrl}
                                linkTo={service.linkTo}
                            />
                        ))}
                    </div>
                </motion.section>

                {/* --- SECCIÓN: Control de Organismos Nocivos --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="pt-12"
                >
                     {/* Título de sección mejorado con nuevo icono */}
                    <div className="flex items-center justify-center gap-3 mb-10">
                        
                        <ExclamationTriangleIcon className="h-8 w-8 text-red-300" />
                        <h2 className="text-2xl md:text-3xl font-semibold text-brand-dark text-center">
                            Control de Organismos Nocivos
                        </h2>
                        <ExclamationTriangleIcon className="h-8 w-8 text-red-300" />
                    </div>
                    {/* Mantenemos la tarjeta única ocupando todo el ancho por ahora */}
                    <div className="gap-8">
                        {pestControlServices.map((service) => (
                            <ServiceCardWithLink
                                key={service.id}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                methods={service.methods}
                                imageUrl={service.imageUrl}
                                linkTo={service.linkTo}
                            />
                        ))}
                    </div>
                    {/* Enlace a sección plagas (sin cambios) */}
                    <div className="text-center mt-10">
                        <Link
                            to="/servicios/control-plagas"
                            className="inline-block bg-brand-mint hover:bg-opacity-80 text-brand-forest font-medium py-2 px-5 rounded-lg transition duration-300 border border-brand-emerald shadow-sm"
                        >
                            Ver Todas las Soluciones de Control de Plagas &rarr;
                        </Link>
                    </div>

                </motion.section>

                {/* --- SECCIÓN: Nuestro Proceso --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-brand-ivory p-8 md:p-10 rounded-lg shadow-md mt-16"
                >
                <h2 className="text-3xl font-bold text-center mb-10 text-brand-dark">Nuestro Proceso Simplificado</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center max-w-5xl mx-auto">
                        {/* ... (Pasos del proceso sin cambios) ... */}
                        <div className="flex flex-col items-center">
                            <PhoneArrowUpRightIcon className="h-12 w-12 text-brand-emerald group-hover:text-brand-deep-forest mb-3 transition-colors duration-300" />
                            <h3 className="font-semibold text-brand-dark mb-1">1. Contacto</h3>
                            <p className="text-sm text-brand-dark opacity-80">Nos llamas o rellenas el formulario.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <ClipboardDocumentCheckIcon className="h-12 w-12 text-brand-emerald group-hover:text-brand-deep-forest mb-3 transition-colors duration-300" />
                            <h3 className="font-semibold text-brand-dark mb-1">2. Evaluación</h3>
                            <p className="text-sm text-brand-dark opacity-80">Analizamos tus necesidades (visita si es necesario).</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <CalculatorIcon className="h-12 w-12 text-brand-emerald group-hover:text-brand-deep-forest mb-3 transition-colors duration-300" />
                            <h3 className="font-semibold text-brand-dark mb-1">3. Presupuesto</h3>
                            <p className="text-sm text-brand-dark opacity-80">Te enviamos una propuesta detallada y sin compromiso.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <CogIcon className="h-12 w-12 text-brand-emerald group-hover:text-brand-deep-forest mb-3 transition-colors duration-300" />
                            <h3 className="font-semibold text-brand-dark mb-1">4. Ejecución</h3>
                            <p className="text-sm text-brand-dark opacity-80">Realizamos el servicio acordado con profesionalidad.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <CheckCircleIcon className="h-12 w-12 text-brand-emerald group-hover:text-brand-deep-forest mb-3 transition-colors duration-300" />
                            <h3 className="font-semibold text-brand-dark mb-1">5. Satisfacción</h3>
                            <p className="text-sm text-brand-dark opacity-80">Verificamos que todo esté perfecto.</p>
                        </div>
                    </div>
                </motion.section>

                {/* --- Sección CTA --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="text-center mt-16 pt-10 border-t border-brand-sand"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-brand-dark">¿Necesitas Ayuda Profesional?</h2>
                    <p className="text-brand-dark opacity-90 mb-6 max-w-lg mx-auto">
                        Contacta con nosotros para obtener un presupuesto personalizado y sin compromiso. ¡Estamos aquí para ayudarte!
                    </p>
                    <Link
                        to="/cotizacion"
                        className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg text-lg"
                    >
                        Solicitar Presupuesto Ahora
                    </Link>
                </motion.section>

            </div>
        </>
    );
}

export default ServicesPage;
