// src/pages/PrivacyPolicyPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';


function PrivacyPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto"> {/* Centra el contenido y limita el ancho */}
            <Helmet>
                <title>Política de Privacidad - Limpiezas Univer</title>
                <meta name="description" content="Consulta nuestra política de privacidad sobre el tratamiento de datos personales en Limpiezas Univer." />
                <meta name="robots" content="noindex, follow" />
            </Helmet>


            <h1 className="text-3xl font-bold mb-6 text-brand-dark text-center">Política de Privacidad</h1>

            {/* Contenedor del contenido con estilos para texto */}
            <div className="prose prose-lg max-w-none text-brand-dark opacity-90 space-y-4">
                {/* --- INICIO CONTENIDO PLACEHOLDER --- */}
                {/* IMPORTANTE: Reemplaza este texto con tu política de privacidad real */}

                <p><strong>Última actualización:</strong> [Fecha de la última actualización]</p>

                <p>
                Bienvenido a Limpiezas Univer. Nos comprometemos a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información cuando visitas nuestro sitio web [Tu Nombre de Dominio], incluyendo cualquier otro formulario de medios, canal de medios, sitio web móvil o aplicación móvil relacionada o conectada al mismo (colectivamente, el "Sitio"). Por favor, lee esta política de privacidad cuidadosamente. Si no estás de acuerdo con los términos de esta política de privacidad, por favor no accedas al sitio.
                </p>

                <h2>Recopilación de tu Información</h2>
                <p>
                Podemos recopilar información sobre ti de varias maneras. La información que podemos recopilar en el Sitio incluye:
                </p>
                <ul>
                    <li>
                        <strong>Datos Personales:</strong> Información de identificación personal, como tu nombre, dirección de correo electrónico y número de teléfono, que nos proporcionas voluntariamente cuando te registras en el Sitio o cuando eliges participar en diversas actividades relacionadas con el Sitio, como formularios de contacto y cotizaciones. No tienes obligación de proporcionarnos información personal de ningún tipo, sin embargo, tu negativa a hacerlo puede impedirte usar ciertas características del Sitio.
                    </li>
                    <li>
                        <strong>Datos Derivados:</strong> Información que nuestros servidores recopilan automáticamente cuando accedes al Sitio, como tu dirección IP, tu tipo de navegador, tu sistema operativo, tus tiempos de acceso y las páginas que has visto directamente antes y después de acceder al Sitio.
                    </li>
                    {/* Añade más secciones según sea necesario: Cookies, Uso de la información, Divulgación, Seguridad, Derechos del usuario, etc. */}
                </ul>

                <h2>Uso de tu Información</h2>
                <p>
                Tener información precisa sobre ti nos permite ofrecerte una experiencia fluida, eficiente y personalizada. Específicamente, podemos usar la información recopilada sobre ti a través del Sitio para:
                </p>
                <ul>
                    <li>Responder a tus solicitudes de productos y servicios.</li>
                    <li>Enviarte un correo electrónico de confirmación.</li>
                    <li>Enviarte información sobre productos o servicios.</li>
                    <li>Responder a las solicitudes de servicio al cliente.</li>
                    {/* ... más puntos */}
                </ul>

                <h2>Contacto</h2>
                <p>
                Si tienes preguntas o comentarios sobre esta Política de Privacidad, por favor contáctanos en:
                <br />
                Limpiezas Univer
                <br />
                [Tu Dirección Física, si aplica]
                <br />
                {/* Usa los datos de contacto ya definidos */}
                Teléfono: +34 602 09 96 90
                <br />
                Email: limpiezasuniver@gmail.com
                </p>

                {/* --- FIN CONTENIDO PLACEHOLDER --- */}
            </div>
        </div>
    );
}

export default PrivacyPolicyPage;
