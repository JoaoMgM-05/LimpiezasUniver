// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BuildingOffice2Icon, HomeIcon, BugAntIcon } from '@heroicons/react/24/outline'; // Asegúrate de importar los iconos que uses
import TestimonialSlider from '../components/testimonialslider';
import { motion } from 'framer-motion';

// Podrías mover esto a un componente reutilizable si quieres
const ServiceHighlightCard = ({ icon: Icon, title, description, linkTo }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col items-center text-center">
        <Icon className="h-12 w-12 text-brand-emerald mb-4" />
        <h3 className="text-xl font-semibold text-brand-dark mb-2">{title}</h3>
        <p className="text-brand-dark opacity-80 mb-4 flex-grow">{description}</p>
        <Link to={linkTo} className="mt-auto text-brand-emerald hover:text-brand-deep-forest font-medium">
            Saber más &rarr;
        </Link>
    </div>
);

const testimonials = [
    { id: 1, name: "Ana García", company: "Oficina Céntrica S.L.", text: "¡El servicio de limpieza de oficinas es impecable! Nuestro espacio de trabajo nunca ha estado tan limpio y ordenado. El equipo es muy profesional y atento a los detalles.", rating: 5 },
    { id: 2, name: "Carlos Martínez", company: "Comunidad de Vecinos El Roble", text: "Contratamos a Limpiezas Univer para el control de roedores en la comunidad y el resultado fue excelente. Rápidos, eficaces y muy discretos. Totalmente recomendables.", rating: 5 },
    { id: 3, name: "Sofía López", company: "Particular", text: "Necesitaba una limpieza profunda después de una reforma y quedé encantada. Eliminaron todo el polvo y los restos de obra. ¡Parecía una casa nueva!", rating: 4 },
    { id: 4, name: "Empresa XYZ", company: "Sector Industrial", text: "Servicio de fumigación rápido y efectivo. Cumplieron con todos los protocolos de seguridad requeridos.", rating: 5 },
];
const sectionVariants = {
    hidden: { opacity: 0, y: 20 }, // Estado inicial (oculto y 20px abajo)
    visible: {
        opacity: 1,
        y: 0, // Estado final (visible y en posición)
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};


function HomePage() {
    return (
        <>
            <Helmet>
                {/* ... (metadatos) ... */}
            </Helmet>

            {/* Añade overflow-x-hidden si las animaciones causan scroll horizontal */}
            <div className="space-y-16 md:space-y-20">

                <motion.section
                    initial="hidden" // Estado inicial de las variantes
                    animate="visible" // Animar al estado visible inmediatamente al cargar
                    variants={sectionVariants} // Usa las variantes definidas
                    className="text-center pt-12 pb-8 bg-gradient-to-b from-brand-ivory to-transparent"
                >
                    {/* ... (contenido Hero) ... */}
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 leading-tight">
                        Tu Espacio Impecable, <span className="text-brand-emerald">Nuestra Prioridad</span>
                    </h1>
                    <p className="text-lg text-brand-dark opacity-80 max-w-2xl mx-auto mb-8">
                        Ofrecemos soluciones integrales de limpieza y control de plagas para empresas y particulares, garantizando ambientes saludables y seguros.
                    </p>
                    <Link
                        to="/cotizacion"
                        className="bg-brand-emerald hover:bg-brand-forest text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg text-lg"
                    >
                        Solicita Presupuesto Ahora
                    </Link>
                </motion.section>

                {/* --- Sección Servicios Destacados --- */}
                {/* 3. Envuelve la sección con motion y aplica props */}
                <motion.section
                    variants={sectionVariants} // Usa las variantes
                    initial="hidden"         // Empieza oculta
                    whileInView="visible"    // Anima a 'visible' cuando entra en la vista
                    viewport={{ once: true, amount: 0.1 }} // Dispara una vez, cuando el 10% es visible
                >
                    <h2 className="text-3xl font-bold text-center text-brand-dark mb-10">Nuestros Servicios Principales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* ... (ServiceHighlightCards) ... */}
                        <ServiceHighlightCard
                            icon={BuildingOffice2Icon}
                            title="Limpieza Profesional"
                            description="Mantenimiento integral para oficinas, comunidades y locales comerciales."
                            linkTo="/servicios" // O a una página específica si la tienes
                        />
                        <ServiceHighlightCard
                            icon={BugAntIcon}
                            title="Control de Plagas"
                            description="Soluciones efectivas y seguras contra insectos y roedores."
                            linkTo="/servicios" // O a una página específica
                        />
                        <ServiceHighlightCard
                            icon={HomeIcon} // O un icono más específico como SparklesIcon
                            title="Limpiezas Especiales"
                            description="Servicios a medida: fin de obra, cristales, tratamientos específicos."
                            linkTo="/servicios" // O a una página específica
                        />
                    </div>
                </motion.section>

                {/* --- Sección Por Qué Elegirnos --- */}
                {/* 3. Envuelve la sección con motion y aplica props */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-brand-ivory p-8 md:p-12 rounded-lg shadow-md" // Mueve las clases aquí
                >
                    <h2 className="text-3xl font-bold text-center text-brand-dark mb-8">¿Por Qué Confiar en Limpiezas Univer?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {/* ... (Contenido Why Us) ... */}
                        <div>
                            {/* Puedes añadir iconos aquí */}
                            <h3 className="text-xl font-semibold text-brand-dark mb-2">Profesionalidad</h3>
                            <p className="text-brand-dark opacity-80">Equipo cualificado, productos homologados y técnicas eficientes.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-brand-dark mb-2">Compromiso</h3>
                            <p className="text-brand-dark opacity-80">Adaptabilidad a tus horarios y necesidades. Satisfacción garantizada.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-brand-dark mb-2">Confianza</h3>
                            <p className="text-brand-dark opacity-80">Empresa registrada con años de experiencia en el sector.</p>
                        </div>
                    </div>
                </motion.section>

                {/* --- NUEVA SECCIÓN: Testimonios --- */}
                {/* 3. Envuelve el componente con motion.div y aplica props */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <TestimonialSlider testimonials={testimonials} />
                </motion.div>

                {/* --- Sección CTA Final --- (Puedes animarla también) */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="text-center mt-12 pt-8 border-t border-brand-sand"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-brand-dark">¿Listo para un Espacio Más Limpio y Seguro?</h2>
                    <p className="text-brand-dark opacity-90 mb-6 max-w-lg mx-auto">
                        Contacta con nosotros hoy mismo y descubre cómo podemos ayudarte.
                    </p>
                    <Link
                        to="/cotizacion" // O /cotizacion si prefieres
                        className="bg-brand-emerald hover:bg-brand-forest text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block shadow hover:shadow-lg"
                    >
                        Contactar Ahora
                    </Link>
                </motion.section>

            </div>
        </>
    );
}

export default HomePage;
