// src/pages/AboutPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
// Importamos un icono para la nueva sección
import { FaEnvira } from "react-icons/fa6";

function AboutPage() {
    return (
        // Quitamos el space-y-8 del div principal para controlar el espacio manualmente
        <div>
            <Helmet>
                <title>Sobre Nosotros - Limpiezas Univer</title>
                <meta name="description" content="Conoce la historia, misión y valores de Limpiezas Univer, tu empresa de confianza para limpieza y control de plagas." />
            </Helmet>

            <img
                // Usamos una imagen de Picsum como placeholder, ajusta el tamaño/seed si quieres
                src="https://picsum.photos/seed/aboutpage/1200/300"
                alt="Imagen representativa de Limpiezas Univer"
                // w-full para ancho completo, h-auto para altura automática o fija (ej. h-64), object-cover si fijas altura
                className="w-full h-auto md:h-64 object-cover rounded-lg shadow-md mb-8"
            />

            {/* Contenedor para el resto del contenido con espaciado */}
            <div className="space-y-8">

                {/* Título principal */}
                <h1 className="text-3xl font-bold text-brand-dark text-center">Sobre Limpiezas Univer</h1>

                {/* Sección de Introducción/Historia */}
                <section className="bg-brand-ivory p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-brand-dark">Nuestra Historia</h2>
                    <p className="text-brand-dark opacity-90 leading-relaxed">
                        Limpiezas Univer nació con la misión de ofrecer servicios de limpieza y fumigación de la más alta calidad en la Comunidad de Madrid. Desde nuestros inicios, nos hemos comprometido con la profesionalidad, la eficiencia y la satisfacción total de nuestros clientes. Creemos en la importancia de un entorno limpio y saludable, tanto en el hogar como en el lugar de trabajo.
                    </p>
                    <p className="text-brand-dark opacity-90 leading-relaxed mt-4">
                        Con años de experiencia en el sector, nuestro equipo está formado por profesionales cualificados y dedicados, que utilizan productos y técnicas avanzadas para garantizar resultados impecables y duraderos.
                    </p>
                </section>

                {/* Sección Misión y Valores */}
                <section>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <h2 className="text-2xl font-semibold mb-4 text-brand-forest">Nuestra Misión</h2>
                            <p className="text-brand-dark opacity-85">
                                Proporcionar soluciones integrales de limpieza y fumigación que superen las expectativas de nuestros clientes, creando ambientes más limpios, seguros y agradables, mediante un servicio confiable y personalizado.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <h2 className="text-2xl font-semibold mb-4 text-brand-forest">Nuestros Valores</h2>
                            <ul className="list-disc list-inside text-brand-dark opacity-85 space-y-1">
                                <li><strong>Calidad:</strong> Compromiso con la excelencia en cada servicio.</li>
                                <li><strong>Confianza:</strong> Transparencia y honestidad en nuestra relación con los clientes.</li>
                                <li><strong>Profesionalidad:</strong> Equipo formado y equipado adecuadamente.</li>
                                <li><strong>Respeto:</strong> Cuidado del medio ambiente y de las instalaciones de nuestros clientes.</li>
                                <li><strong>Adaptabilidad:</strong> Soluciones flexibles y a medida.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* --- NUEVA SECCIÓN: Compromiso Ambiental --- */}
                <section className="bg-brand-light p-8 rounded-lg shadow-inner flex flex-col md:flex-row items-center gap-6"> {/* Usamos brand-light para variar */}
                    <div className="flex-shrink-0">
                        <FaEnvira className="h-16 w-16 md:h-20 md:w-20 text-brand-emerald" /> {/* Icono más grande y en emerald */}
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-brand-dark">Nuestro Compromiso Ambiental</h2>
                        <p className="text-brand-dark opacity-85 leading-relaxed">
                            En Limpiezas Univer, estamos comprometidos con la protección del medio ambiente. Por ello, priorizamos el uso de **productos de limpieza ecológicos y biodegradables** siempre que sea posible, sin comprometer la eficacia de nuestros servicios. Buscamos minimizar nuestra huella ecológica y contribuir a un futuro más sostenible.
                        </p>
                        {/* Podrías añadir más puntos si quieres */}
                        {/* <ul className="list-disc list-inside text-brand-dark opacity-85 space-y-1 mt-3 text-sm">
                            <li>Uso de productos con etiqueta ecológica europea.</li>
                            <li>Optimización de rutas para reducir emisiones.</li>
                            <li>Gestión responsable de residuos.</li>
                        </ul> */}
                    </div>
                </section>

                {/* Puedes añadir más secciones: Equipo, Área de Cobertura, etc. */}

            </div> {/* Cierre del div con space-y-8 */}
        </div> // Cierre del div principal
    );
}

export default AboutPage;
