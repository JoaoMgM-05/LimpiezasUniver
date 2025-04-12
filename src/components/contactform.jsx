// src/components/contactform.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form'; // <-- Importa useForm

// Accede a las variables de entorno (sin cambios)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ContactForm() {
    const form = useRef();
    // Estados solo para el resultado del envío de EmailJS
    const [sendSuccess, setSendSuccess] = useState(false);
    const [sendError, setSendError] = useState(''); // Guardará el mensaje de error de EmailJS

    // Inicializa react-hook-form
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
        mode: 'onBlur', // Validar cuando el usuario sale del campo (opcional)
    });

    // Esta función ahora recibe los datos validados por react-hook-form
    const onSubmit = (data) => {
        // Limpia estados previos de envío
        setSendSuccess(false);
        setSendError('');

        console.log("Datos del formulario validados:", data); // Puedes ver los datos aquí

        // EmailJS sigue usando la referencia al formulario DOM
        emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            form.current, // Sigue necesitando la ref al <form>
            PUBLIC_KEY
        )
            .then((result) => {
                console.log('SUCCESS!', result.text);
                setSendSuccess(true);
                reset(); // Limpia el formulario usando la función de react-hook-form
            }, (error) => {
                console.log('FAILED...', error.text);
                // Guarda un mensaje de error específico de EmailJS
                setSendError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
            });
            // react-hook-form maneja isSubmitting, no necesitamos setIsSending manualmente
    };

    // Función auxiliar para aplicar clases condicionales de error
    const getInputClassName = (fieldName) => {
        const baseClasses = "mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-brand-emerald focus:border-brand-emerald sm:text-sm";
        return `${baseClasses} ${errors[fieldName] ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'}`;
    };

    return (
        /* handleSubmit envuelve tu función onSubmit y maneja la validación */
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Campo Nombre */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-dark">Nombre <span className="text-red-500">*</span></label>
                <input
                    type="text"
                    id="name"
                    // name="name" // react-hook-form lo infiere de register
                    // Conecta el input con react-hook-form y define reglas de validación
                    {...register("name", { required: "El nombre es obligatorio" })}
                    className={getInputClassName("name")}
                    aria-invalid={errors.name ? "true" : "false"} // Para accesibilidad
                />
                {/* Muestra el error específico para este campo */}
                {errors.name && <p className="mt-1 text-sm text-red-600" role="alert">{errors.name.message}</p>}
            </div>

            {/* Campo Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-dark">Email <span className="text-red-500">*</span></label>
                <input
                    type="email"
                    id="email"
                    // name="email"
                    {...register("email", {
                        required: "El email es obligatorio",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Introduce un email válido"
                        }
                    })}
                    className={getInputClassName("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600" role="alert">{errors.email.message}</p>}
            </div>

            {/* Campo Teléfono (Opcional) */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-dark">Teléfono</label>
                <input
                    type="tel"
                    id="phone"
                    // name="phone"
                    {...register("phone")} // Sin validación, es opcional
                    className={getInputClassName("phone")} // Usa la función auxiliar aunque no haya error específico aquí
                />
                {/* No mostramos error para teléfono ya que es opcional */}
            </div>

            {/* Campo Mensaje */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-dark">Mensaje <span className="text-red-500">*</span></label>
                <textarea
                    id="message"
                    // name="message"
                    rows="4"
                    {...register("message", { required: "El mensaje no puede estar vacío" })}
                    className={getInputClassName("message")}
                    aria-invalid={errors.message ? "true" : "false"}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600" role="alert">{errors.message.message}</p>}
            </div>

            {/* Mensajes de estado del ENVÍO (no de validación) */}
            <div className="h-6"> {/* Espacio reservado */}
                {sendSuccess && <p className="text-sm text-green-600">¡Mensaje enviado con éxito!</p>}
                {sendError && <p className="text-sm text-red-600">{sendError}</p>}
            </div>

            {/* Botón Enviar */}
            <div>
                <button
                    type="submit"
                    // Deshabilitado si se está enviando (isSubmitting viene de react-hook-form)
                    disabled={isSubmitting}
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-emerald hover:bg-brand-forest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-emerald disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {/* Muestra 'Enviando...' si isSubmitting es true */}
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
