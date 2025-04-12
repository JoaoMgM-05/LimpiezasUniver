
import React from 'react';
import { FaTiktok, FaInstagram, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import logoImage from '/assets/logoLU.png';

function ContactCard() {
    const socialLinks = {
        tiktok: 'https://www.tiktok.com/@limpiezasuniver', //
        instagram: 'https://www.instagram.com/_limpiezasuniver/',
        facebook: 'https://www.facebook.com/profile.php?id=61575154712017',
        LinkedIn: 'https://www.linkedin.com/in/limpiezas-univer-servicio-profesional-de-limpieza'
    };


    const contactInfo = {
        phone: '+34 602 09 96 90',
        email: 'limpiezasuniver@gmail.com',
    };

    return (
        <div className="relative max-w-md w-full bg-brand-dark/10 backdrop-blur-md rounded-2xl border border-x-brand-forest/20 shadow-xl overflow-hidden mx-auto animate-float">
            <div className="relative p-8 flex flex-col items-center z-10">
                <img
                    src={logoImage}
                    
                    className="w-46 h-46 rounded-full border-2 border-white/10 mb-5 transition duration-500 cursor-pointer hover:scale-110 hover:rotate-[15deg]"
                    alt="Logo Limpiezas Univer"
                />
                <h2 className="text-brand-dark text-2xl font-semibold mb-4 transition duration-300 hover:text-brand-emerald">
                    LIMPIEZAS UNIVER
                </h2>

                <div className="text-center text-brand-dark/90 mb-6 space-y-2">
                    <p>Limpieza profesional</p>
                    <p>Control de Organismos Nocivos</p>

                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center justify-center space-x-2 transition duration-300 hover:text-brand-dark">
                        <PhoneIcon className="h-5 w-5 text-brand-forest hover:text-brand-emerald" />
                        <span>{contactInfo.phone}</span>
                    </a>

                    <a href={`mailto:${contactInfo.email}`} className="flex items-center justify-center space-x-2 transition duration-300 hover:text-brand-dark">
                        <EnvelopeIcon className="h-5 w-5 text-brand-forest hover:text-brand-emerald" />
                        <span>{contactInfo.email}</span>
                    </a>
                </div>

                <div className="flex gap-4 mb-8">
                    <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-light/50 rounded-full grid place-items-center text-brand-dark no-underline transition duration-300 hover:bg-gradient-to-r hover:from-brand-emerald hover:to-brand-forest hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-emerald/50">
                        <FaTiktok />
                        <span className="sr-only">TikTok</span>
                    </a>
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-light/50 rounded-full grid place-items-center text-instagramPink no-underline transition duration-300 hover:bg-gradient-to-r hover:from-brand-emerald hover:to-brand-forest hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-emerald/50">
                        <FaInstagram />
                        <span className="sr-only">Instagram</span>
                    </a>
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-light/50 rounded-full grid place-items-center text-blueFacebook no-underline transition duration-300 hover:bg-gradient-to-r hover:from-brand-emerald hover:to-brand-forest hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-emerald/50">
                        <FaFacebookF />
                        <span className="sr-only">Facebook</span>
                    </a>
                    <a href={socialLinks.LinkedIn} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-light/50 rounded-full grid place-items-center text-blueLinkedIn no-underline transition duration-300 hover:bg-gradient-to-r hover:from-brand-emerald hover:to-brand-forest hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-emerald/50">
                        <FaLinkedin />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </div>

                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} // El botón también llama al teléfono
                   className="inline-block py-2 px-6 bg-brand-emerald hover:bg-brand-forest border-none rounded-lg text-white font-medium cursor-pointer transition duration-300 shadow hover:shadow-lg"> {/* Estilo de botón sólido */}
                    Contáctanos
                </a>
            </div>
        </div>
    );
}

export default ContactCard;
