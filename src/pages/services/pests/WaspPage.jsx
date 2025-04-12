// src/pages/services/pests/WaspPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// Icono específico
import { GiWaspSting } from "react-icons/gi";
// Otros iconos útiles
import { ExclamationTriangleIcon, ShieldCheckIcon, LightBulbIcon, NoSymbolIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
// Podrías necesitar un icono de abeja si diferencias mucho: import { FaBee } from 'react-icons/fa';
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

function WaspPage() {
    return (
        <>
            <Helmet>
                <title>Retirada de Nidos de Avispas y Abejas - Limpiezas Univer</title>
                {/* ¡Personaliza [Tu Ciudad/Área]! */}
                <meta name="description" content="Servicio profesional y seguro para la retirada y control de nidos de avispas (común, asiática) y abejas en [Tu Ciudad/Área]. ¡No te arriesgues!" />
            </Helmet>

            <div className="space-y-12 md:space-y-16 overflow-x-hidden">

                {/* --- Sección Hero Específica --- */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="bg-brand-ivory rounded-lg shadow p-8 md:p-12 text-center md:text-left md:flex md:items-center md:gap-8"
                >
                    <GiWaspSting className="h-16 w-16 md:h-24 md:w-24 text-brand-emerald mx-auto md:mx-0 mb-4 md:mb-0 flex-shrink-0" />
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">Retirada Segura de Nidos de Avispas y Abejas</h1>
                        <p className="text-lg text-brand-dark opacity-80 mb-6">
                            ¿Has encontrado un nido? No te arriesgues. Nuestro equipo profesional elimina o controla nidos de avispas y abejas de forma segura y eficaz.
                        </p>
                        <Link
                            to="/cotizacion" // Considera ?service=avispas
                            className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-2 px-6 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                        >
                            Solicitar Retirada de Nido
                        </Link>
                    </div>
                </motion.section>

                {/* --- Sección: Peligro Real --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">Los Riesgos de Avispas y Abejas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <ExclamationTriangleIcon className="h-8 w-8 text-red-600 mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Picaduras Dolorosas</h3>
                            <p className="text-sm text-brand-dark opacity-80">Sus picaduras son dolorosas y pueden causar hinchazón y malestar significativo.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <ExclamationTriangleIcon className="h-8 w-8 text-red-800 mb-3" /> {/* Más intenso */}
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Reacciones Alérgicas Graves</h3>
                            <p className="text-sm text-brand-dark opacity-80">Para personas alérgicas, una sola picadura puede desencadenar una reacción anafiláctica potencialmente mortal.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <ExclamationTriangleIcon className="h-8 w-8 text-yellow-600 mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Miedo e Incomodidad</h3>
                            <p className="text-sm text-brand-dark opacity-80">La presencia de un nido puede generar miedo e impedir el uso normal de jardines, terrazas o piscinas.</p>
                        </div>
                    </div>
                </motion.section>

                 {/* --- Sección: ¡NO LO HAGAS TÚ MISMO! (Qué Hacer y Qué No) --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-yellow-50 p-8 rounded-lg border border-yellow-300" // Tono de advertencia
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-8 text-center">
                        <ShieldCheckIcon className="inline h-8 w-8 mr-2" />
                        Seguridad Ante Todo: Qué Hacer (y Qué NO)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-yellow-900">
                        {/* Qué NO Hacer */}
                        <div className="bg-red-100 p-4 rounded border border-red-300">
                            <h3 className="font-semibold mb-3 text-lg flex items-center"><NoSymbolIcon className="h-6 w-6 mr-2 text-red-600"/> ¡NO HAGAS ESTO!</h3>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li><span className="font-semibold">NO intentes quitar el nido tú mismo:</span> Es extremadamente peligroso, pueden atacar en masa.</li>
                                <li><span className="font-semibold">NO golpees ni mojes el nido:</span> Esto las alterará y provocará un ataque.</li>
                                <li><span className="font-semibold">NO uses insecticidas domésticos:</span> Suelen ser ineficaces y aumentan el riesgo.</li>
                                <li><span className="font-semibold">NO tapes la entrada del nido:</span> Buscarán otra salida, posiblemente hacia el interior.</li>
                            </ul>
                        </div>
                         {/* Qué SÍ Hacer */}
                        <div className="bg-green-100 p-4 rounded border border-green-300">
                             <h3 className="font-semibold mb-3 text-lg flex items-center"><CheckCircleIcon className="h-6 w-6 mr-2 text-green-600"/> HAZ ESTO:</h3>
                             <ul className="list-disc list-inside space-y-2 text-sm">
                                <li><span className="font-semibold">Mantén la calma y la distancia:</span> Evita movimientos bruscos cerca del nido.</li>
                                <li><span className="font-semibold">Identifica la ubicación:</span> Observa desde lejos por dónde entran y salen.</li>
                                <li><span className="font-semibold">Advierte a otros:</span> Informa a familiares o vecinos y mantén alejados a niños y mascotas.</li>
                                <li><span className="font-semibold">Llama a profesionales:</span> Contacta con expertos como nosotros para una retirada segura.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>


                {/* --- Sección Nuestro Servicio Profesional --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-brand-mint p-8 rounded-lg shadow-md"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Nuestro Proceso de Retirada y Control</h2>
                    <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto text-brand-dark">
                        <li>
                            <span className="font-semibold">Evaluación y Planificación:</span> Identificamos la especie (avispa común, asiática, abeja), tamaño y ubicación del nido para determinar el mejor enfoque y hora de actuación.
                        </li>
                        <li>
                            <span className="font-semibold">Equipo de Protección Completo:</span> Nuestros técnicos utilizan trajes y equipos especializados para garantizar su seguridad.
                        </li>
                        <li>
                            <span className="font-semibold">Tratamiento Específico:</span> Aplicamos insecticidas potentes directamente en el nido o utilizamos métodos de retirada física según el caso y la especie.
                        </li>
                        <li>
                            <span className="font-semibold">Retirada del Nido (si es seguro):</span> Una vez neutralizada la colonia, retiramos el nido para evitar que sea reutilizado o atraiga otras plagas.
                        </li>
                         <li>
                            <span className="font-semibold">Consideraciones con Abejas:</span> Si se trata de abejas (especie protegida), evaluamos la posibilidad de contactar a un apicultor local para su reubicación segura siempre que sea viable.
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
                     <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">Cómo Prevenir la Anidación</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Sellar Grietas y Huecos:</span> Revisa y sella posibles puntos de entrada en paredes, tejados, aleros, cajas de persianas.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Controlar Fuentes de Alimento:</span> En exteriores, mantén tapados cubos de basura y evita dejar bebidas azucaradas o comida al alcance.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Revisión Periódica:</span> Inspecciona regularmente zonas propensas a la anidación (áticos, cobertizos, aleros) a principios de primavera.</p>
                        </div>
                         <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Instalar Trampas (Preventivo):</span> En algunas zonas, trampas específicas pueden ayudar a capturar reinas a principios de temporada.</p>
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
                    <h2 className="text-2xl font-semibold mb-4 text-brand-dark">¿Nido de Avispas o Abejas Cerca? ¡Llámanos!</h2>
                    <p className="text-brand-dark opacity-90 mb-6 max-w-lg mx-auto">
                        No pongas en riesgo tu seguridad ni la de tu familia. Contacta con nosotros para una intervención profesional y garantizada.
                    </p>
                    <Link
                        to="/cotizacion" // O con parámetro: to="/cotizacion?service=avispas"
                        className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                    >
                        Solicitar Retirada de Nido
                    </Link>
                    <p className="mt-4 text-sm text-brand-dark opacity-70">
                        O vuelve a <Link to="/servicios/control-plagas" className="text-brand-emerald hover:underline">Control de Plagas</Link>.
                    </p>
                </motion.section>

            </div>
        </>
    );
}

export default WaspPage;
