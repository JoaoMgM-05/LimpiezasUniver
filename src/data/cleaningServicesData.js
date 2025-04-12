// src/data/cleaningServicesData.js
import { BuildingOffice2Icon, HomeIcon, SparklesIcon, TrashIcon, BugAntIcon } from '@heroicons/react/24/outline';

export const cleaningServices = [
    { id: "office", icon: BuildingOffice2Icon, title: "Limpieza de Oficinas y Empresas", description: "Mantenimiento integral y personalizado para oficinas, locales comerciales y empresas.", methods: ["Limpieza diaria/semanal", "Mobiliario y equipos", "Aseos", "Cristales", "Suelos"], imageUrl: "/assets/images/placeholder-office.jpg", linkTo: "/servicios/limpieza-oficinas" },
    { id: "community", icon: HomeIcon, title: "Limpieza de Comunidades y Hogares", description: "Servicios adaptados para portales, escaleras, zonas comunes y viviendas particulares.", methods: ["Portales y escaleras", "Ascensores", "Limpieza profunda", "Post-mudanza"], imageUrl: "/assets/images/placeholder-community.jpg", linkTo: "/servicios/limpieza-comunidades" },
    { id: "special", icon: SparklesIcon, title: "Limpiezas Especiales", description: "Soluciones para necesidades específicas: cristales en altura, tratamiento de suelos, tapicerías.", methods: ["Cristales en altura", "Pulido suelos", "Moquetas", "Garajes"], imageUrl: "/assets/images/placeholder-special.jpg", linkTo: "/servicios/limpiezas-especiales" },
    { id: "endofwork", icon: TrashIcon, title: "Limpieza Fin de Obra", description: "Dejamos tu espacio nuevo o reformado completamente limpio y listo para usar.", methods: ["Eliminación polvo fino", "Restos pintura/yeso", "Ventanas", "Desinfección"], imageUrl: "/assets/images/placeholder-endofwork.jpg", linkTo: "/servicios/limpieza-fin-obra" }
];

export const pestControlServices = [
    { id: "generalpests", icon: BugAntIcon, title: "Control Integral de Plagas", description: "Soluciones efectivas y seguras contra insectos, roedores y otras plagas comunes.", methods: ["Desinsectación", "Desratización", "Prevención", "Diagnóstico"], imageUrl: "/assets/images/placeholder-pests.jpg", linkTo: "/servicios/control-plagas" },
];
