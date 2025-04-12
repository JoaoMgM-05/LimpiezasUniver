// src/components/TestimonialSlider.jsx
import React from 'react';
// Importa componentes de Swiper React
import { Swiper, SwiperSlide } from 'swiper/react';
// Importa módulos necesarios de Swiper (Navegación, Paginación, Autoplay)
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Importa los estilos base de Swiper y los módulos
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Opcional: Importa un icono para las comillas o estrellas
import { StarIcon } from '@heroicons/react/20/solid'; // Para estrellas de valoración
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'; // Para comillas

// Recibe los testimonios como prop
function TestimonialSlider({ testimonials }) {
    if (!testimonials || testimonials.length === 0) {
        return null; // No renderizar nada si no hay testimonios
    }

    return (
        <section className="bg-brand-ivory py-12 md:py-16"> {/* Fondo suave */}
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-brand-dark mb-10">Lo que Dicen Nuestros Clientes</h2>
                <Swiper
                    // Instala los módulos
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30} // Espacio entre slides
                    slidesPerView={1} // Mostrar 1 slide por defecto
                    loop={true} // Para que el carrusel sea infinito
                    autoplay={{
                        delay: 5000, // Cambia cada 5 segundos
                        disableOnInteraction: true, // Detener en interacción manual (mejor UX)
                    }}
                    pagination={{ clickable: true }} // Bolitas de paginación clickables
                    navigation={true} // Flechas de navegación (pueden necesitar estilos adicionales)
                    // Responsive breakpoints
                    breakpoints={{
                        // Cuando el ancho de ventana es >= 768px
                        768: {
                            slidesPerView: 2, // Mostrar 2 slides
                            spaceBetween: 40,
                        },
                        // Cuando el ancho de ventana es >= 1024px
                        1024: {
                            slidesPerView: 3, // Mostrar 3 slides
                            spaceBetween: 50,
                        },
                    }}
                    // Clases personalizadas para la navegación y paginación si es necesario
                    // Ajusta estilos de flechas y puntos si es necesario en tu CSS global
                    className="mySwiper pb-12" // Aumenta padding bottom para la paginación si se solapa
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="h-auto pb-4"> {/* h-auto y padding bottom en slide */}
                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full flex flex-col text-center"> {/* h-full para igualar alturas */}
                                {/* Icono de comillas */}
                                <ChatBubbleLeftRightIcon className="h-8 w-8 text-brand-emerald mx-auto mb-4 opacity-70" />

                                {/* Texto del testimonio */}
                                <p className="text-brand-dark opacity-85 italic mb-4 flex-grow">"{testimonial.text}"</p>

                                {/* Nombre y Compañía */}
                                <p className="font-semibold text-brand-dark mt-4">{testimonial.name}</p> {/* Añadido mt-4 */}
                                {testimonial.company && <p className="text-sm text-brand-dark opacity-70">{testimonial.company}</p>}

                                {/* Opcional: Estrellas de valoración */}
                                {testimonial.rating && (
                                    <div className="flex justify-center mt-3">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default TestimonialSlider;
