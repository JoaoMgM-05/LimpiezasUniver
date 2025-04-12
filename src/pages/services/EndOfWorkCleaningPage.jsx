// src/pages/services/EndOfWorkCleaningPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TrashIcon, SparklesIcon, CheckBadgeIcon, BuildingStorefrontIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Importa los módulos que necesites

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Variantes de animación (puedes reutilizar las mismas)
const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// --- DATOS PARA LA GALERÍA (¡REEMPLAZAR CON TUS IMÁGENES!) ---
const galleryImages = [
    { id: 1, src: "https://picsum.photos/seed/obra1/800/400", alt: "Suelo limpio tras obra" },
    { id: 2, src: "https://picsum.photos/seed/obra2/800/400", alt: "Ventana impecable sin restos de pintura" },
    { id: 3, src: "https://picsum.photos/seed/obra3/800/400", alt: "Baño desinfectado y brillante post-reforma" },
    { id: 4, src: "https://picsum.photos/seed/obra4/800/400", alt: "Detalle de limpieza en cocina nueva" },
];
// --- FIN DATOS GALERÍA ---

function EndOfWorkCleaningPage() {
    return (
        <>
            <Helmet>
                <title>Limpieza Fin de Obra Profesional - Limpiezas Univer</title>
                {/* ¡Personaliza [Tu Ciudad/Área]! */}
                <meta name="description" content="Servicio especializado de limpieza fin de obra en [Tu Ciudad/Área]. Eliminamos polvo, restos y suciedad para que estrenes tu espacio impecable." />
            </Helmet>

            <div className="space-y-12 md:space-y-16 overflow-x-hidden">

                {/* --- Sección Hero Específica --- */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="bg-brand-ivory rounded-lg shadow p-8 md:p-12 text-center md:text-left md:flex md:items-center md:gap-8"
                >
                    <TrashIcon className="h-16 w-16 md:h-24 md:w-24 text-brand-emerald mx-auto md:mx-0 mb-4 md:mb-0 flex-shrink-0" />
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">Limpieza Profesional Fin de Obra</h1>
                        <p className="text-lg text-brand-dark opacity-80 mb-6">
                            Transformamos el caos post-obra en un espacio impecable y listo para ser disfrutado. Nos encargamos de la suciedad más difícil para que tú solo te preocupes de estrenar.
                        </p>
                        <Link
                            to="/cotizacion" // Considera añadir un parámetro ?service=fin-obra si quieres preseleccionar
                            className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-2 px-6 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                        >
                            Solicitar Presupuesto Fin de Obra
                        </Link>
                    </div>
                </motion.section>

                {/* --- Sección: El Desafío Post-Obra --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">El Reto de la Suciedad Post-Obra</h2>
                    <p className="text-center text-brand-dark opacity-85 mb-8 max-w-3xl mx-auto">
                        Una reforma u obra nueva genera una suciedad muy específica y persistente: polvo fino que se cuela por todas partes, restos de yeso, cemento, pintura, adhesivos... Una limpieza convencional no es suficiente.
                    </p>
                    {/* Opcional: Podrías añadir 2-3 puntos clave con iconos aquí */}
                </motion.section>

                {/* --- Sección: Nuestra Solución Detallada --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-brand-mint p-8 rounded-lg shadow-md"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">¿Qué Hacemos en una Limpieza Fin de Obra?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {/* Adapta estos puntos a tus servicios exactos */}
                        <div className="flex items-start gap-3">
                            <SparklesIcon className="h-6 w-6 text-brand-emerald flex-shrink-0 mt-1" />
                            <p><span className="font-semibold">Eliminación de Polvo Fino:</span> Aspirado y limpieza de paredes, techos, suelos, muebles, conductos de ventilación.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <SparklesIcon className="h-6 w-6 text-brand-emerald flex-shrink-0 mt-1" />
                            <p><span className="font-semibold">Limpieza de Ventanas y Cristales:</span> Eliminación de etiquetas, restos de pintura, silicona en marcos y cristales.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <SparklesIcon className="h-6 w-6 text-brand-emerald flex-shrink-0 mt-1" />
                            <p><span className="font-semibold">Tratamiento de Suelos:</span> Limpieza profunda adaptada a cada material (parquet, gres, mármol...), eliminando restos de obra.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <SparklesIcon className="h-6 w-6 text-brand-emerald flex-shrink-0 mt-1" />
                            <p><span className="font-semibold">Baños y Cocinas a Fondo:</span> Desinfección completa, limpieza de azulejos, sanitarios, grifería, eliminando lechada o cemento.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <SparklesIcon className="h-6 w-6 text-brand-emerald flex-shrink-0 mt-1" />
                            <p><span className="font-semibold">Puertas, Rodapiés y Detalles:</span> Limpieza de carpintería, enchufes, interruptores, radiadores.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <SparklesIcon className="h-6 w-6 text-brand-emerald flex-shrink-0 mt-1" />
                            <p><span className="font-semibold">Retirada de Residuos:</span> Eliminación de pequeños escombros, plásticos protectores y embalajes restantes.</p>
                        </div>
                    </div>
                </motion.section>

                 {/* --- Sección Galería Swiper --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="py-8"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Resultados Impecables</h2>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30} // Espacio entre slides
                        slidesPerView={1} // Muestra 1 slide a la vez en móvil
                        breakpoints={{
                            // En pantallas medianas (md) y mayores, muestra 2 o 3
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2.5 }, // Muestra 2.5 para dar pista de que hay más
                        }}
                        centeredSlides={true}
                        loop={true} // Para que sea infinito
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination={{ clickable: true }} // Bolitas de paginación
                        navigation={true} // Flechas de navegación
                        className="rounded-lg overflow-hidden" // Estilos para el contenedor Swiper
                    >
                        {galleryImages.map((image) => (
                            <SwiperSlide key={image.id}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-64 md:h-80 object-cover" // Ajusta altura según necesites
                                    loading="lazy"
                                />
                                {/* Opcional: Añadir un caption */}
                                {/* <p className="text-center text-sm mt-2 text-brand-dark opacity-75">{image.alt}</p> */}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.section>


                {/* --- Sección Beneficios y Público --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
                >
                    <div>
                        <h3 className="text-xl font-semibold text-brand-dark mb-4">¿Por Qué Elegir Univer?</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <CheckBadgeIcon className="h-6 w-6 text-brand-emerald flex-shrink-0 mt-0.5" />
                                <span><span className="font-medium">Ahorro de Tiempo y Esfuerzo:</span> Nos encargamos del trabajo duro y tedioso.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckBadgeIcon className="h-6 w-6 text-brand-emerald flex-shrink-0 mt-0.5" />
                                <span><span className="font-medium">Resultados Profesionales:</span> Acabado impecable que no conseguirías fácilmente.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckBadgeIcon className="h-6 w-6 text-brand-emerald flex-shrink-0 mt-0.5" />
                                <span><span className="font-medium">Equipo y Productos Adecuados:</span> Usamos maquinaria y químicos específicos para cada superficie.</span>
                            </li>
                             <li className="flex items-start gap-2">
                                <CheckBadgeIcon className="h-6 w-6 text-brand-emerald flex-shrink-0 mt-0.5" />
                                <span><span className="font-medium">Personal Experimentado:</span> Sabemos cómo tratar cada tipo de suciedad y material.</span>
                            </li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-xl font-semibold text-brand-dark mb-4">Ideal Para:</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <BuildingStorefrontIcon className="h-6 w-6 text-brand-dark opacity-70 flex-shrink-0 mt-0.5" />
                                <span>Constructoras y Empresas de Reformas.</span>
                            </li>
                             <li className="flex items-start gap-2">
                                <UserGroupIcon className="h-6 w-6 text-brand-dark opacity-70 flex-shrink-0 mt-0.5" />
                                <span>Arquitectos y Decoradores.</span>
                            </li>
                             <li className="flex items-start gap-2">
                                <HomeIcon className="h-6 w-6 text-brand-dark opacity-70 flex-shrink-0 mt-0.5" /> {/* Reutilizando icono */}
                                <span>Particulares tras una reforma en su vivienda o local.</span>
                            </li>
                        </ul>
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
                    <h2 className="text-2xl font-semibold mb-4 text-brand-dark">¿Terminaste la Obra? ¡Déjala Perfecta!</h2>
                    <p className="text-brand-dark opacity-90 mb-6 max-w-lg mx-auto">
                        Solicita tu presupuesto sin compromiso para nuestra limpieza fin de obra y estrena tu espacio con la mejor impresión.
                    </p>
                    <Link
                        to="/cotizacion" // O con parámetro: to="/cotizacion?service=fin-obra"
                        className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                    >
                        Pedir Presupuesto Limpieza Fin de Obra
                    </Link>
                    <p className="mt-4 text-sm text-brand-dark opacity-70">
                        O vuelve a <Link to="/servicios" className="text-brand-emerald hover:underline">Nuestros Servicios</Link>.
                    </p>
                </motion.section>

            </div>
        </>
    );
}

export default EndOfWorkCleaningPage;
