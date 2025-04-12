// src/components/Layout.jsx
import React, { useEffect, useRef } from 'react'; // Importa useEffect y useRef
import Header from './header';
import Footer from './footer';

function Layout({ children }) {
    // 1. Crea una referencia para el div principal
    const layoutRef = useRef(null);

    // 2. useEffect para calcular y establecer la altura
    useEffect(() => {
        const updateHeight = () => {
            if (layoutRef.current) {
                // Obtenemos la altura total del documento
                const docHeight = document.documentElement.scrollHeight;
                // Establecemos la variable CSS '--doc-height' en el div principal
                layoutRef.current.style.setProperty('--doc-height', `${docHeight}px`);
            }
        };

        // Llama a la función al montar
        updateHeight();

        // Vuelve a llamar a la función si la ventana cambia de tamaño
        window.addEventListener('resize', updateHeight);
        // También considera observadores de mutación si el contenido cambia dinámicamente
        // y afecta la altura total sin cambiar el tamaño de la ventana.

        // Limpia el listener al desmontar
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, [children]); // Se recalcula si los children cambian (puede afectar altura)

    // Define alturas aproximadas (ajusta según tu diseño real)
    const headerHeight = '60px'; // Ej: Altura del header
    const footerOffset = '80px'; // Ej: Altura del footer + margen superior

    return (
        // 3. Asigna la ref al div principal
        <div
            ref={layoutRef}
            className="flex flex-col min-h-screen bg-brand-background relative overflow-hidden"
        >
            <Header />
            <main className="flex-grow container mx-auto p-4 md:p-6 z-10">
                {children}
            </main>
            <Footer />

            <img
                src="/assets/insect.gif"
                alt=""
                className="absolute w-10 h-10 opacity-0 pointer-events-none z-0"
                style={{
                    top: headerHeight,
                    left: '10px',
                    transform: 'rotate(90deg)',
                    // La animación ahora usará la variable --doc-height definida en el CSS
                    animation: 'crawl-perimeter 45s linear infinite 3s'
                }}
            />
        </div>
    );
}

export default Layout;
