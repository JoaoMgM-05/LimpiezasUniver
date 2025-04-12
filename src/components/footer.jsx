// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // <-- 1. Importa Link

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-sand p-4 mt-8">
      <div className="container mx-auto text-center text-sm space-y-1"> {/* Añadido space-y-1 */}
        <p>&copy; {currentYear} Limpiezas Univer. Todos los derechos reservados.</p>
        {/* 2. Añade el párrafo con el enlace */}
        <p>
          <Link to="/politica-privacidad" className="hover:text-brand-ivory transition duration-300">
            Política de Privacidad
          </Link>
          {/* Puedes añadir más enlaces con un separador si es necesario */}
          {/* | <Link to="/aviso-legal" className="hover:text-brand-ivory transition duration-300">Aviso Legal</Link> */}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
