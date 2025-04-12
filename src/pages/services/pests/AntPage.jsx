// src/pages/services/pests/AntPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// Icono específico para hormigas
import { GiAnt } from "react-icons/gi";
// Otros iconos útiles
import { ExclamationTriangleIcon, ShieldCheckIcon, LightBulbIcon, BeakerIcon } from '@heroicons/react/24/outline';
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

function AntPage() {
    return (
        <>
            <Helmet>
                <title>Control y Eliminación de Hormigas - Limpiezas Univer</title>
                {/* ¡Personaliza [Tu Ciudad/Área]! */}
                <meta name="description" content="Servicio profesional para eliminar plagas de hormigas en hogares, jardines y negocios de [Tu Ciudad/Área]. Tratamientos efectivos y preventivos." />
            </Helmet>

            <div className="space-y-12 md:space-y-16 overflow-x-hidden">

                {/* --- Sección Hero Específica --- */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="bg-brand-ivory rounded-lg shadow p-8 md:p-12 text-center md:text-left md:flex md:items-center md:gap-8"
                >
                    <GiAnt className="h-16 w-16 md:h-24 md:w-24 text-brand-emerald mx-auto md:mx-0 mb-4 md:mb-0 flex-shrink-0" />
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">Control Profesional de Hormigas</h1>
                        <p className="text-lg text-brand-dark opacity-80 mb-6">
                            ¿Cansado de las hileras de hormigas en tu cocina o jardín? Ofrecemos soluciones efectivas para eliminar la colonia y prevenir futuras invasiones.
                        </p>
                        <Link
                            to="/cotizacion" // Considera ?service=hormigas
                            className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-2 px-6 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                        >
                            Solicitar Tratamiento Hormigas
                        </Link>
                    </div>
                </motion.section>

                {/* --- Sección Problemas Causados --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">Más que una Simple Molestia</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <ExclamationTriangleIcon className="h-8 w-8 text-yellow-500 mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Contaminación de Alimentos</h3>
                            <p className="text-sm text-brand-dark opacity-80">Invaden despensas y cocinas en busca de comida, contaminando superficies y alimentos.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <ExclamationTriangleIcon className="h-8 w-8 text-red-400 mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Picaduras Dolorosas</h3>
                            <p className="text-sm text-brand-dark opacity-80">Algunas especies pueden infligir picaduras molestas o dolorosas, especialmente en exteriores.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <ExclamationTriangleIcon className="h-8 w-8 text-orange-500 mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Daños Estructurales</h3>
                            <p className="text-sm text-brand-dark opacity-80">Las hormigas carpinteras pueden excavar galerías en la madera, debilitando estructuras.</p>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Nuestro Enfoque Contra las Hormigas</h2>
                    <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto text-brand-dark">
                        <li>
                            <span className="font-semibold">Inspección e Identificación:</span> Localizamos rutas, puntos de entrada y, si es posible, el nido. Identificamos la especie para un tratamiento óptimo.
                        </li>
                        <li>
                            <span className="font-semibold">Tratamiento Dirigido:</span> Aplicamos cebos específicos (que las obreras llevan al nido), insecticidas de baja toxicidad en zonas clave o tratamientos perimetrales.
                        </li>
                        <li>
                            <span className="font-semibold">Barreras de Protección:</span> Creamos barreras químicas en exteriores para impedir nuevas entradas.
                        </li>
                        <li>
                            <span className="font-semibold">Seguridad:</span> Utilizamos productos autorizados y métodos seguros para tu familia y mascotas, informando de las precauciones.
                        </li>
                         <li>
                            <span className="font-semibold">Recomendaciones Personalizadas:</span> Te asesoramos sobre cómo evitar que vuelvan a aparecer.
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
                     <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">Cómo Prevenir las Hormigas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Usamos iconos claros para cada consejo */}
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Limpieza Rigurosa:</span> No dejes restos de comida, migas o líquidos azucarados. Limpia superficies y friega el suelo regularmente.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Almacenamiento Hermético:</span> Guarda azúcar, miel, cereales y otros alimentos atractivos en recipientes bien cerrados.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Sellar Entradas:</span> Revisa y sella grietas en ventanas, puertas, paredes y alrededor de tuberías.</p>
                        </div>
                         <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Eliminar Humedad:</span> Repara fugas y evita acumulaciones de agua, ya que atraen a las hormigas.</p>
                        </div>
                         <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-start gap-3">
                            <LightBulbIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-brand-dark opacity-90"><span className="font-semibold">Jardín Controlado:</span> Mantén la vegetación podada y alejada de los muros de la casa.</p>
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
                    <h2 className="text-2xl font-semibold mb-4 text-brand-dark">¿Las Hormigas Invaden tu Espacio?</h2>
                    <p className="text-brand-dark opacity-90 mb-6 max-w-lg mx-auto">
                        No dejes que se conviertan en un problema mayor. Contacta con nuestros expertos para una solución eficaz y duradera.
                    </p>
                    <Link
                        to="/cotizacion" // O con parámetro: to="/cotizacion?service=hormigas"
                        className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                    >
                        Eliminar Hormigas Ahora
                    </Link>
                    <p className="mt-4 text-sm text-brand-dark opacity-70">
                        O vuelve a <Link to="/servicios/control-plagas" className="text-brand-emerald hover:underline">Control de Plagas</Link>.
                    </p>
                </motion.section>

            </div>
        </>
    );
}

export default AntPage;
