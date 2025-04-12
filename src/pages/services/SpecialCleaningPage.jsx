// src/pages/services/SpecialCleaningPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// Iconos relevantes: Sparkles para general, Window para cristales, PaintBrush para suelos (o similar), Chair/Sofa para tapicerías, Truck para garajes
import { SparklesIcon, WindowIcon, PaintBrushIcon, TruckIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
// Podrías necesitar iconos más específicos de react-icons, ej:
// import { MdOutlineChair, MdOutlineCleaningServices } from 'react-icons/md';
import { motion } from 'framer-motion';

// Import Swiper React components & styles (igual que en EndOfWorkCleaningPage)
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Variantes de animación
const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// --- DATOS PARA LA GALERÍA ESPECIAL (¡REEMPLAZAR CON TUS IMÁGENES!) ---
const specialGalleryImages = [
    { id: 1, src: "https://picsum.photos/seed/especial1/800/400", alt: "Cristales en altura relucientes" },
    { id: 2, src: "https://picsum.photos/seed/especial2/800/400", alt: "Suelo de mármol abrillantado" },
    { id: 3, src: "https://picsum.photos/seed/especial3/800/400", alt: "Sofá limpio tras limpieza de tapicería" },
    { id: 4, src: "https://picsum.photos/seed/especial4/800/400", alt: "Garaje limpio sin manchas de aceite" },
];
// --- FIN DATOS GALERÍA ---

// --- DATOS DE SERVICIOS ESPECIALES (Adapta a lo que ofreces) ---
const specialServicesList = [
    {
        icon: WindowIcon,
        title: "Limpieza de Cristales en Altura",
        description: "Limpieza profesional de cristales y fachadas acristaladas en edificios, oficinas y locales, utilizando equipos seguros y eficientes (pértigas, góndolas si aplica)."
    },
    {
        icon: PaintBrushIcon, // O un icono más específico de suelos si encuentras
        title: "Tratamiento y Pulido de Suelos",
        description: "Devolvemos el brillo y la vida a tus suelos de mármol, terrazo, granito o parquet mediante decapado, cristalizado, abrillantado o encerado."
    },
    {
        icon: SparklesIcon, // Placeholder, buscar icono de sofá/silla (ej. MdOutlineChair)
        title: "Limpieza de Tapicerías y Moquetas",
        description: "Eliminamos manchas, ácaros y suciedad acumulada en sofás, sillas, alfombras y moquetas con sistemas de inyección-extracción."
    },
    {
        icon: TruckIcon,
        title: "Limpieza de Garajes",
        description: "Limpieza profunda de suelos de garajes eliminando manchas de aceite y grasa, polvo acumulado, utilizando fregadoras industriales."
    },
    // Añade aquí otros servicios especiales que ofrezcas:
    // { icon: FireIcon, title: "Limpieza Post-Incendio", description: "..." },
    // { icon: BiohazardIcon, title: "Limpiezas Traumáticas / Diógenes", description: "..." },
];
// --- FIN DATOS SERVICIOS ---


function SpecialCleaningPage() {
    return (
        <>
            <Helmet>
                <title>Limpiezas Especiales y Tratamientos - Limpiezas Univer</title>
                {/* ¡Personaliza [Tu Ciudad/Área]! */}
                <meta name="description" content="Servicios de limpieza especiales en [Tu Ciudad/Área]: cristales en altura, pulido de suelos, tapicerías, garajes y más. Soluciones a medida." />
            </Helmet>

            <div className="space-y-12 md:space-y-16 overflow-x-hidden">

                {/* --- Sección Hero Específica --- */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="bg-brand-ivory rounded-lg shadow p-8 md:p-12 text-center md:text-left md:flex md:items-center md:gap-8"
                >
                    <SparklesIcon className="h-16 w-16 md:h-24 md:w-24 text-brand-emerald mx-auto md:mx-0 mb-4 md:mb-0 flex-shrink-0" />
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">Limpiezas Especiales y Tratamientos</h1>
                        <p className="text-lg text-brand-dark opacity-80 mb-6">
                            ¿Necesitas una solución de limpieza fuera de lo común? Ofrecemos servicios especializados para retos específicos, utilizando técnicas y equipos profesionales.
                        </p>
                        <Link
                            to="/cotizacion" // Podrías añadir ?service=especial
                            className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-2 px-6 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                        >
                            Consultar Limpieza Especial
                        </Link>
                    </div>
                </motion.section>

                {/* --- Sección: ¿Cuándo Necesitas una Limpieza Especial? --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">Soluciones para Necesidades Concretas</h2>
                    <p className="text-center text-brand-dark opacity-85 mb-8 max-w-3xl mx-auto">
                        Hay situaciones donde una limpieza estándar no basta. Ya sea por la dificultad de acceso, el tipo de suciedad o el material a tratar, nuestras limpiezas especiales garantizan un resultado óptimo y seguro.
                    </p>
                </motion.section>

                {/* --- Sección: Listado de Servicios Especiales --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="space-y-8" // Espacio entre cada servicio
                >
                     <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Nuestros Servicios Destacados</h2>
                    {specialServicesList.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-200 md:flex md:items-center md:gap-6">
                            <service.icon className="h-12 w-12 text-brand-emerald mx-auto md:mx-0 mb-4 md:mb-0 flex-shrink-0" />
                            <div className="text-center md:text-left">
                                <h3 className="font-semibold text-xl text-brand-dark mb-2">{service.title}</h3>
                                <p className="text-brand-dark opacity-80">{service.description}</p>
                            </div>
                        </div>
                    ))}
                     <p className="text-center text-brand-dark opacity-80 pt-4">
                        ¿Necesitas otro tipo de limpieza especial? <Link to="/cotizacion" className="text-brand-emerald hover:underline font-medium">Consúltanos</Link>, seguro que podemos ayudarte.
                    </p>
                </motion.section>


                 {/* --- Sección Galería Swiper (Mostrando variedad) --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="py-8"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Resultados Visibles</h2>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2.5 },
                        }}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ delay: 4500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        className="rounded-lg overflow-hidden"
                    >
                        {specialGalleryImages.map((image) => (
                            <SwiperSlide key={image.id}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-64 md:h-80 object-cover"
                                    loading="lazy"
                                />
                                 {/* Caption opcional para indicar qué servicio es */}
                                 <p className="text-center text-sm mt-2 text-brand-dark opacity-75">{image.alt}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.section>


                {/* --- Sección Beneficios --- */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-brand-ivory p-8 rounded-lg shadow-md"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Ventajas de Nuestros Servicios Especiales</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left max-w-5xl mx-auto">
                        <div className="flex flex-col items-center md:items-start">
                            <CheckBadgeIcon className="h-10 w-10 text-brand-emerald mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Resultados Superiores</h3>
                            <p className="text-sm text-brand-dark opacity-80">Logramos acabados que marcan la diferencia gracias a técnicas y productos específicos.</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <CheckBadgeIcon className="h-10 w-10 text-brand-emerald mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Cuidado de Materiales</h3>
                            <p className="text-sm text-brand-dark opacity-80">Conocemos cada superficie y aplicamos el tratamiento adecuado para no dañarla.</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <CheckBadgeIcon className="h-10 w-10 text-brand-emerald mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-brand-dark">Seguridad y Eficiencia</h3>
                            <p className="text-sm text-brand-dark opacity-80">Contamos con personal formado y equipos homologados, especialmente para trabajos en altura.</p>
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
                    <h2 className="text-2xl font-semibold mb-4 text-brand-dark">¿Necesitas una Limpieza Especializada?</h2>
                    <p className="text-brand-dark opacity-90 mb-6 max-w-lg mx-auto">
                        Cuéntanos tu caso. Te ofreceremos una solución a medida y un presupuesto detallado sin compromiso.
                    </p>
                    <Link
                        to="/cotizacion" // O con parámetro: to="/cotizacion?service=especial"
                        className="bg-brand-emerald hover:bg-brand-deep-forest text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                    >
                        Solicitar Presupuesto Especial
                    </Link>
                    <p className="mt-4 text-sm text-brand-dark opacity-70">
                        O vuelve a <Link to="/servicios" className="text-brand-emerald hover:underline">Nuestros Servicios</Link>.
                    </p>
                </motion.section>

            </div>
        </>
    );
}

export default SpecialCleaningPage;
