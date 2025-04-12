// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // Fondo oscuro, texto claro (ivory o light)
    <nav className="bg-brand-dark shadow-md text-brand-ivory p-4"> {/* Usamos ivory para el texto */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Nombre */}
        <Link to="/" className="text-xl font-bold hover:opacity-80 transition duration-300">
          Limpiezas Univer {/* El texto hereda brand-ivory */}
        </Link>

        {/* Enlaces */}
        <div className="space-x-4">
          {/* Texto hereda brand-ivory, hover con opacidad */}
          <Link to="/" className="hover:opacity-80 transition duration-300">Inicio</Link>
          <Link to="/servicios" className="hover:opacity-80 transition duration-300">Servicios</Link>
          <Link to="/cotizacion" className="hover:opacity-80 transition duration-300">Cotización</Link>
          <Link to="/sobre-nosotros" className="hover:opacity-80 transition duration-300">Sobre Nosotros</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
