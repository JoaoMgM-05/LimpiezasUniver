// src/components/ServiceCard.jsx
import React from 'react';

// Recibe las props: icon (como componente), title, description, methods, imageUrl
function ServiceCard({ icon: Icon, title, description, methods, imageUrl }) {
    return (
        <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300 border border-gray-200 overflow-hidden flex flex-col">
            <img
                src={imageUrl}
                // Alt text más específico usando el título
                alt={`Servicio de ${title}`}
                className="w-full h-48 object-cover"
                loading="lazy" // Añadimos carga diferida para imágenes que no están al inicio
            />
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                    {/* Renderiza el icono pasado como prop */}
                    {Icon && <Icon className="h-8 w-8 text-brand-emerald mr-3 flex-shrink-0" />}
                    <h2 className="text-xl font-semibold text-brand-dark">{title}</h2>
                </div>
                {/* flex-grow asegura que la descripción empuje la lista hacia abajo */}
                <p className="text-brand-dark opacity-80 mb-4 flex-grow">{description}</p>
                {/* Solo muestra la sección de métodos si el array 'methods' tiene elementos */}
                {methods && methods.length > 0 && (
                    <div>
                        <h3 className="font-medium text-brand-dark mb-2 text-sm">Incluye:</h3>
                        <ul className="list-disc list-inside text-brand-dark opacity-70 text-sm space-y-1">
                            {methods.map((method, i) => (
                                <li key={i}>{method}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ServiceCard;
