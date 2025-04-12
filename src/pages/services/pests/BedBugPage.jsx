// src/pages/services/pests/BedBugPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// Icono específico
import { FaBed } from 'react-icons/fa';
// Otros iconos útiles
import { ExclamationTriangleIcon, ShieldCheckIcon, LightBulbIcon, MagnifyingGlassIcon, FireIcon, BeakerIcon } from '@heroicons/react/24/outline';
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

function BedBugPage() {
    return (
        <>
            <Helmet>
                <title>Eliminación Profesional de Chinches de Cama - Limpiezas Univer</title>
                {/* ¡Personaliza [Tu Ciudad/Área]! */}
                <meta name="description" content="Servicio especializado para detectar y eliminar chinches de cama en [Tu Ciudad/Área]. Tratamientos seguros y eficaces para recuperar tu descanso." />
            </Helmet>

            <div className="space-y-12 md:space-y-16 overflow-x-hidden">

                {/* --- Sección Hero Específica --- */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="bg-brand-ivory rounded-lg shadow p-8 md:p-12 text-center md:text-left md:flex md:items-center md:gap-8"
                >
                    <FaBed className="h-16 w-16 md:h-24 md:w-24 text-brand-emerald mx-auto md:mx-0 mb-4 md:mb-0 flex-shrink-0" />
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">Eliminación Profesional de Chinches de Cama</h1>
                        <p className="text-lg text-brand-dark opacity-80 mb-6">
                            Recupera tu tranquilidad y descanso. Las chinches son expertas en esconderse y difíciles de erradicar. Ofrecemos tratamientos especializados y discretos.
                        </p>
                        <Link
                            to="/cotizacion" // Considera ?service=chinches
                            className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-2 px-6 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                        >
                            Solicitar Tratamiento Chinches
                        </Link>
                    </div>
                </motion.section>

                {/* --- Sección: El Problema Oculto --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">¿Por Qué son tan Problemáticas las Chinches?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <ExclamationTriangleIcon className="h-8 w-8 text-red-500 mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Picaduras Nocturnas</h3>
                            <p className="text-sm text-brand-dark opacity-80">Causan picaduras molestas (a menudo en línea) que provocan picor e irritación, afectando al sueño.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <ExclamationTriangleIcon className="h-8 w-8 text-orange-500 mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Estrés y Ansiedad</h3>
                            <p className="text-sm text-brand-dark opacity-80">La idea de tenerlas y la dificultad para eliminarlas genera un gran estrés psicológico.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <ExclamationTriangleIcon className="h-8 w-8 text-yellow-600 mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Rápida Propagación</h3>
                            <p className="text-sm text-brand-dark opacity-80">Se extienden fácilmente a otras habitaciones o viviendas a través de ropa, muebles o equipaje.</p>
                        </div>
                    </div>
                </motion.section>

                 {/* --- Sección: Signos de Infestación (Dónde Buscar) --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-red-50 p-8 rounded-lg border border-red-200" // Fondo rojizo suave para alerta
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-8 text-center">
                        <MagnifyingGlassIcon className="inline h-8 w-8 mr-2" />
                        Cómo Detectar Chinches de Cama
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-red-900">
                        <div>
                            <h3 className="font-semibold mb-2">Busca estos signos:</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Pequeñas manchas oscuras o rojizas en colchones, sábanas o somieres (excrementos digeridos).</li>
                                <li>Pieles mudadas de color claro y translúcido.</li>
                                <li>Los propios insectos vivos (pequeños, ovalados, marrones, tamaño de una semilla de manzana).</li>
                                <li>Picaduras agrupadas o en línea en la piel expuesta durante la noche.</li>
                            </ul>
                        </div>
                        <div>
                             <h3 className="font-semibold mb-2">Revisa estas zonas meticulosamente:</h3>
                             <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Costuras y etiquetas de colchones y somieres.</li>
                                <li>Grietas en la estructura de la cama y cabecero.</li>
                                <li>Muebles cercanos a la cama (mesillas, sofás).</li>
                                <li>Rodapiés, enchufes, detrás de cuadros o papel pintado suelto.</li>
                            </ul>
                        </div>
                    </div>
                     {/* Aquí podríamos añadir una imagen/diagrama simple */}
                </motion.section>


                {/* --- Sección Nuestro Tratamiento Meticuloso --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-brand-mint p-8 rounded-lg shadow-md"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Tratamiento Profesional: Clave del Éxito</h2>
                    <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto text-brand-dark">
                        <li>
                            <span className="font-semibold">Inspección Detallada:</span> Nuestros técnicos realizan una búsqueda exhaustiva para confirmar la presencia, identificar focos y evaluar el alcance de la infestación.
                        </li>
                        <li>
                            <span className="font-semibold">Plan de Acción Combinado:</span> Generalmente usamos una combinación de métodos para máxima efectividad:
                            <ul className="list-disc list-inside ml-6 mt-1 text-sm opacity-90">
                                <li><FireIcon className="inline h-4 w-4 mr-1 text-red-600"/>Tratamientos térmicos o de vapor (muy eficaces contra todas las fases).</li>
                                <li><BeakerIcon className="inline h-4 w-4 mr-1 text-blue-600"/>Aplicación cuidadosa de insecticidas específicos en grietas y refugios.</li>
                                <li>Aspiración profunda de áreas infestadas.</li>
                            </ul>
                        </li>
                         <li>
                            <span className="font-semibold">Preparación del Cliente:</span> Te guiaremos sobre los pasos necesarios antes del tratamiento (lavar ropa a alta temperatura, despejar zonas) para asegurar la eficacia.
                        </li>
                        <li>
                            <span className="font-semibold">Tratamientos de Seguimiento:</span> Dada la resistencia de los huevos, son necesarias varias visitas para erradicar completamente la plaga.
                        </li>
                         <li>
                            <span className="font-semibold">Garantía y Discreción:</span> Ofrecemos garantía en nuestros tratamientos y actuamos con la máxima discreción.
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
                     <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">Prevenir la Aparición de Chinches</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Al Viajar:</span> Inspecciona la habitación del hotel (colchón, cabecero) antes de instalarte. Mantén el equipaje alejado de la cama. Al volver, lava la ropa a alta temperatura.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Muebles de Segunda Mano:</span> Inspecciona minuciosamente cualquier mueble usado (especialmente colchones o sofás) antes de introducirlo en casa.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Orden y Limpieza:</span> Aspira regularmente, especialmente alrededor de la cama. Reduce el desorden donde puedan esconderse.</p>
                        </div>
                         <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Fundas Anti-Chinches:</span> Utiliza fundas especiales para colchones y almohadas que impiden su entrada o salida.</p>
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
                    <h2 className="text-2xl font-semibold mb-4 text-brand-dark">¿Sospechas de Chinches? ¡Actúa Rápido!</h2>
                    <p className="text-brand-dark opacity-90 mb-6 max-w-lg mx-auto">
                        La detección temprana es clave. Contacta con nosotros para una inspección profesional y un plan de tratamiento efectivo. ¡Recupera tu hogar!
                    </p>
                    <Link
                        to="/cotizacion" // O con parámetro: to="/cotizacion?service=chinches"
                        className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                    >
                        Solicitar Inspección Chinches
                    </Link>
                    <p className="mt-4 text-sm text-brand-dark opacity-70">
                        O vuelve a <Link to="/servicios/control-plagas" className="text-brand-emerald hover:underline">Control de Plagas</Link>.
                    </p>
                </motion.section>

            </div>
        </>
    );
}

export default BedBugPage;
