// src/pages/services/pests/WoodPestPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// Icono específico (viga de madera o gusano de madera)
import { GiWoodBeam, GiEarthWorm } from "react-icons/gi"; // GiWoodBeam puede ser mejor para el concepto general
// Otros iconos útiles
import { ExclamationTriangleIcon, ShieldCheckIcon, LightBulbIcon, MagnifyingGlassIcon, BeakerIcon } from '@heroicons/react/24/outline';
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

function WoodPestPage() {
    return (
        <>
            <Helmet>
                <title>Control de Termitas y Carcoma - Protección Madera - Limpiezas Univer</title>
                {/* ¡Personaliza [Tu Ciudad/Área]! */}
                <meta name="description" content="Tratamientos profesionales contra termitas y carcoma en Madrid. Protege la estructura de tu hogar o negocio del daño silencioso de las plagas de la madera." />
            </Helmet>

            <div className="space-y-12 md:space-y-16 overflow-x-hidden">

                {/* --- Sección Hero Específica --- */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="bg-brand-ivory rounded-lg shadow p-8 md:p-12 text-center md:text-left md:flex md:items-center md:gap-8"
                >
                    {/* Usamos GiWoodBeam como icono principal */}
                    <GiWoodBeam className="h-16 w-16 md:h-24 md:w-24 text-brand-emerald mx-auto md:mx-0 mb-4 md:mb-0 flex-shrink-0" />
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">Control Profesional de Termitas y Carcoma</h1>
                        <p className="text-lg text-brand-dark opacity-80 mb-6">
                            Protege tu inversión. Las plagas de la madera actúan en silencio, causando graves daños estructurales. Ofrecemos detección temprana y tratamientos efectivos.
                        </p>
                        <Link
                            to="/cotizacion" // Considera ?service=madera
                            className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-2 px-6 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                        >
                            Solicitar Inspección Madera
                        </Link>
                    </div>
                </motion.section>

                {/* --- Sección: El Peligro Silencioso --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">El Daño Oculto de las Plagas Xilófagas</h2>
                    <p className="text-center text-brand-dark opacity-85 mb-8 max-w-3xl mx-auto">
                        Las termitas y la carcoma (xilófagos) se alimentan de la celulosa de la madera desde el interior. A menudo, el daño solo es visible cuando la infestación está avanzada y la estructura (vigas, marcos, muebles) ya está comprometida.
                    </p>
                    {/* Opcional: Pequeña diferenciación */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-sm text-center">
                        <p><span className="font-semibold">Termitas:</span> Insectos sociales, viven en colonias (subterráneas o en madera seca), muy destructivas.</p>
                        <p><span className="font-semibold">Carcoma:</span> Larvas de ciertos escarabajos, actúan individualmente, dejan agujeros característicos.</p>
                    </div>
                </motion.section>

                 {/* --- Sección: Signos de Alerta --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-yellow-50 p-8 rounded-lg border border-yellow-300" // Tono de advertencia
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-8 text-center">
                        <MagnifyingGlassIcon className="inline h-8 w-8 mr-2" />
                        Señales de Posible Infestación
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-yellow-900">
                        {/* Signos de Termitas */}
                        <div>
                            <h3 className="font-semibold mb-2">Posibles signos de Termitas:</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Cordones de barro en paredes, cimientos o madera.</li>
                                <li>Madera que suena hueca al golpearla.</li>
                                <li>Pintura o barniz con ondulaciones o burbujas.</li>
                                <li>Presencia de insectos alados (enjambrazón) en primavera/verano.</li>
                                <li>Puertas o ventanas que encajan mal (por deformación).</li>
                            </ul>
                        </div>
                         {/* Signos de Carcoma */}
                        <div>
                            <h3 className="font-semibold mb-2">Posibles signos de Carcoma:</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Pequeños agujeros redondos u ovalados en la superficie de la madera.</li>
                                <li>Acumulación de serrín fino (similar a polvo de talco) cerca de los agujeros.</li>
                                <li>Ruido de roer proveniente de la madera (en ambientes silenciosos).</li>
                                <li>Debilitamiento o rotura de la madera afectada.</li>
                                <li>Presencia de escarabajos adultos cerca de la madera.</li>
                            </ul>
                        </div>
                    </div>
                     {/* Aquí podríamos añadir imágenes comparativas */}
                </motion.section>


                {/* --- Sección Nuestro Tratamiento Integral --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-brand-mint p-8 rounded-lg shadow-md"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Tratamientos Curativos y Preventivos</h2>
                    <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto text-brand-dark">
                        <li>
                            <span className="font-semibold">Inspección Profesional:</span> Utilizamos técnicas visuales y tecnológicas (detectores) para localizar la actividad xilófaga y evaluar la extensión del daño.
                        </li>
                        <li>
                            <span className="font-semibold">Tratamientos Curativos Específicos:</span>
                            <ul className="list-disc list-inside ml-6 mt-1 text-sm opacity-90">
                                <li><BeakerIcon className="inline h-4 w-4 mr-1 text-green-600"/> <span className="font-medium">Sistema de Cebos (Termitas):</span> Estaciones con cebo específico que las obreras transportan a la colonia, eliminándola desde dentro.</li>
                                <li><BeakerIcon className="inline h-4 w-4 mr-1 text-blue-600"/> <span className="font-medium">Inyección a Presión (Carcoma y Termitas):</span> Aplicación de insecticida directamente dentro de las galerías en la madera afectada.</li>
                                <li>Pulverización/Pincelado en superficies accesibles.</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-semibold">Tratamientos Preventivos:</span>
                            <ul className="list-disc list-inside ml-6 mt-1 text-sm opacity-90">
                                <li><ShieldCheckIcon className="inline h-4 w-4 mr-1 text-gray-600"/> <span className="font-medium">Barreras Químicas (Termitas):</span> Creación de una barrera protectora en el suelo alrededor de la edificación.</li>
                                <li><ShieldCheckIcon className="inline h-4 w-4 mr-1 text-gray-600"/> <span className="font-medium">Tratamiento de Maderas:</span> Aplicación de protectores en maderas nuevas o expuestas.</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-semibold">Seguimiento y Garantía:</span> Realizamos controles periódicos y ofrecemos garantía sobre nuestros tratamientos.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">Prevenir Infestaciones Futuras</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Controlar la Humedad:</span> Repara fugas, asegura buena ventilación (sótanos, bajo cubiertas), evita acumulación de agua cerca de cimientos.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Evitar Contacto Madera-Suelo:</span> Asegúrate de que las estructuras de madera no estén en contacto directo con la tierra.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Eliminar Restos de Madera:</span> No acumules leña, raíces o restos de madera cerca de la edificación.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Inspecciones Periódicas:</span> Realiza revisiones visuales y considera inspecciones profesionales regulares, especialmente en zonas de riesgo.</p>
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
                    <h2 className="text-2xl font-semibold mb-4 text-brand-dark">¿Preocupado por Termitas o Carcoma?</h2>
                    <p className="text-brand-dark opacity-90 mb-6 max-w-lg mx-auto">
                        Una detección a tiempo puede ahorrarte costosas reparaciones. Solicita una inspección profesional y protege tu propiedad.
                    </p>
                    <Link
                        to="/cotizacion" // O con parámetro: to="/cotizacion?service=madera"
                        className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                    >
                        Solicitar Tratamiento Madera
                    </Link>
                    <p className="mt-4 text-sm text-brand-dark opacity-70">
                        O vuelve a <Link to="/servicios/control-plagas" className="text-brand-emerald hover:underline">Control de Plagas</Link>.
                    </p>
                </motion.section>

            </div>
        </>
    );
}

export default WoodPestPage;
