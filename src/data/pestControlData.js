// src/data/pestControlData.js
import { GiWoodBeam, GiWaspSting, GiInsectJaws, GiLongAntennaeBug, GiRat, GiAnt } from "react-icons/gi";

export const commonPests = [
    
    { name: "Cucarachas", description: "Tratamientos efectivos contra todas las especies comunes.", icon: GiLongAntennaeBug, linkTo: "/servicios/control-plagas/cucarachas" },
    { name: "Roedores (Ratas y Ratones)", description: "Soluciones de desratización seguras y discretas.", icon: GiRat, linkTo: "/servicios/control-plagas/roedores" },
    { name: "Hormigas", description: "Control de invasiones en interiores y exteriores.", icon: GiAnt, linkTo: "/servicios/control-plagas/hormigas" },
    { name: "Chinches de Cama", description: "Tratamientos especializados para su erradicación.", icon: GiInsectJaws, linkTo: "/servicios/control-plagas/chinches" },
    { name: "Avispas y Abejas", description: "Retirada segura de nidos y control.", icon: GiWaspSting, linkTo: "/servicios/control-plagas/avispas" },
    { name: "Termitas y Carcoma", description: "Tratamientos preventivos y curativos para la madera.", icon: GiWoodBeam, linkTo: "/servicios/control-plagas/madera" },
];
