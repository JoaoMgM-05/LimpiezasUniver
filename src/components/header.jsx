// src/components/Header.jsx
import React, { useState } from 'react'; // Importa useState
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Importa también el icono de cierre (X)

function Header() {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para cambiar el estado del menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Función para cerrar el menú al hacer clic en un enlace (opcional pero buena UX)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    // Añadimos relative para posicionar el menú móvil absoluto si es necesario
    <header className="bg-brand-dark text-brand-ivory shadow-md sticky top-0 z-50 relative">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Nombre */}
        <Link to="/" className="text-xl font-bold hover:opacity-80 transition duration-300" onClick={closeMobileMenu}>
          Limpiezas Univer
        </Link>

        {/* Navegación para pantallas grandes */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:opacity-80 transition duration-300">Inicio</Link>
          <Link to="/servicios" className="hover:opacity-80 transition duration-300">Servicios</Link>
          <Link to="/cotizacion" className="hover:opacity-80 transition duration-300">Cotización</Link> {/* Corregido de Cotizaciones */}
          <Link to="/sobre-nosotros" className="hover:opacity-80 transition duration-300">Sobre Nosotros</Link>
        </div>

        {/* Botón para menú móvil */}
        <button
          className="md:hidden text-brand-ivory hover:opacity-80 transition duration-300"
          onClick={toggleMobileMenu} // Llama a la función toggle
          aria-label="Abrir menú" // Mejora accesibilidad
          aria-expanded={isMobileMenuOpen} // Indica si está expandido
        >
          {/* Cambia el icono según el estado */}
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Menú desplegable para móvil */}
      {/* Usamos clases de Tailwind para mostrar/ocultar y animar */}
      <div
        className={`absolute top-full left-0 w-full bg-brand-dark shadow-md md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0' // Animación de altura y opacidad
        }`}
      >
        <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
          {/* Usamos closeMobileMenu en cada Link para cerrar al navegar */}
          <Link to="/" className="block py-2 hover:opacity-80 transition duration-300" onClick={closeMobileMenu}>Inicio</Link>
          <Link to="/servicios" className="block py-2 hover:opacity-80 transition duration-300" onClick={closeMobileMenu}>Servicios</Link>
          <Link to="/cotizacion" className="block py-2 hover:opacity-80 transition duration-300" onClick={closeMobileMenu}>Cotización</Link>
          <Link to="/sobre-nosotros" className="block py-2 hover:opacity-80 transition duration-300" onClick={closeMobileMenu}>Sobre Nosotros</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
