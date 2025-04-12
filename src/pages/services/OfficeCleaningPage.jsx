// src/pages/services/OfficeCleaningPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// Importa iconos relevantes si los necesitas
import { BuildingOfficeIcon, SparklesIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion'; // Para animaciones si quieres

// Variantes de animación (opcional, puedes usar las mismas de HomePage)
const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

function OfficeCleaningPage() {
    return (
        <>
            <Helmet>
                <title>Limpieza Profesional de Oficinas y Empresas - Limpiezas Univer</title>
                <meta name="description" content="Servicio experto de limpieza y mantenimiento para oficinas, locales comerciales y empresas en [Tu Ciudad/Área]. Ambientes de trabajo limpios y productivos." />
                {/* Añade keywords relevantes */}
                {/* <meta name="keywords" content="limpieza oficinas, limpieza empresas, mantenimiento oficinas, limpieza locales, [Tu Ciudad]" /> */}
            </Helmet>

            <div className="space-y-12 md:space-y-16 overflow-x-hidden">

                {/* --- Sección Hero Específica del Servicio --- */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="bg-brand-ivory rounded-lg shadow p-8 md:p-12 text-center md:text-left md:flex md:items-center md:gap-8"
                >
                    <BuildingOfficeIcon className="h-16 w-16 md:h-24 md:w-24 text-brand-emerald mx-auto md:mx-0 mb-4 md:mb-0 flex-shrink-0" />
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">Limpieza Profesional de Oficinas y Empresas</h1>
                        <p className="text-lg text-brand-dark opacity-80 mb-6">
                            Mantén un entorno de trabajo impecable, saludable y productivo con nuestros servicios de limpieza personalizados para oficinas, despachos y locales comerciales.
                        </p>
                        <Link
                            to="/cotizacion"
                            className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-2 px-6 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                        >
                            Solicitar Presupuesto Específico
                        </Link>
                    </div>
                </motion.section>

                {/* --- Sección Qué Incluye --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">¿Qué Incluye Nuestro Servicio?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Ejemplo de tarjeta de característica */}
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200 flex items-start gap-4">
                            <SparklesIcon className="h-8 w-8 text-brand-emerald flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1 text-brand-dark">Limpieza General y Mantenimiento</h3>
                                <p className="text-sm text-brand-dark opacity-80">Limpieza de suelos, mobiliario, equipos informáticos (superficial), vaciado de papeleras, desempolvado general.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200 flex items-start gap-4">
                            <CheckBadgeIcon className="h-8 w-8 text-brand-emerald flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1 text-brand-dark">Desinfección de Aseos y Zonas Comunes</h3>
                                <p className="text-sm text-brand-dark opacity-80">Limpieza y desinfección profunda de baños, cocinas office, salas de descanso, recepción.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200 flex items-start gap-4">
                            <SparklesIcon className="h-8 w-8 text-brand-emerald flex-shrink-0 mt-1" /> {/* Cambiar icono si aplica */}
                            <div>
                                <h3 className="font-semibold text-lg mb-1 text-brand-dark">Limpieza de Cristales</h3>
                                <p className="text-sm text-brand-dark opacity-80">Limpieza periódica de ventanas interiores, mamparas y espejos para una máxima transparencia.</p>
                            </div>
                        </div>
                        {/* Añade más características: tratamiento de suelos, limpieza de moquetas, etc. */}
                    </div>
                    <p className="text-center mt-6 text-brand-dark opacity-80">
                        Adaptamos la frecuencia (diaria, semanal, quincenal) y las tareas a las necesidades específicas de tu negocio.
                    </p>
                </motion.section>

                {/* --- Sección Beneficios --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-brand-mint p-8 rounded-lg shadow-md" // Fondo diferente para destacar
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">Beneficios de un Entorno Profesional Limpio</h2>
                    <ul className="list-disc list-inside space-y-3 max-w-2xl mx-auto text-brand-dark opacity-90">
                        <li>Mejora la <span className="font-semibold">imagen de tu empresa</span> ante clientes y visitantes.</li>
                        <li>Aumenta la <span className="font-semibold">productividad y bienestar</span> de tus empleados.</li>
                        <li>Reduce la propagación de gérmenes y <span className="font-semibold">mejora la salud</span> en el lugar de trabajo.</li>
                        <li>Prolonga la <span className="font-semibold">vida útil del mobiliario</span> y las instalaciones.</li>
                        <li>Te permite <span className="font-semibold">enfocarte en tu negocio</span>, dejando la limpieza en manos expertas.</li>
                    </ul>
                </motion.section>

                 {/* --- Sección CTA Específica --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="text-center mt-12 pt-8 border-t border-brand-sand"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-brand-dark">¿Necesitas un Servicio de Limpieza para tu Oficina?</h2>
                    <p className="text-brand-dark opacity-90 mb-6 max-w-lg mx-auto">
                        Contacta con nosotros para obtener un plan de limpieza a medida y un presupuesto detallado sin compromiso.
                    </p>
                    <Link
                        to="/cotizacion"
                        className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                    >
                        Pedir Presupuesto de Limpieza de Oficina
                    </Link>
                </motion.section>

            </div>
        </>
    );
}

export default OfficeCleaningPage;
