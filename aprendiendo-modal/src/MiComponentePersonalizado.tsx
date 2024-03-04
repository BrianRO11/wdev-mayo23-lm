import React from "react";
import Persona from "./models/Persona";

interface MiPersonaProps{
    persona : Persona
}

const MiComponentePersonalizado : React.FC<MiPersonaProps> = ({ persona }) => {
    return (
        <div>
            <p>Nombre: {persona.nombre}</p>
            <p>Apellido 1: {persona.apellido1}</p>
            <p>Apellido 2: {persona.apellido2}</p>
            <p>Edad: {persona.edad}</p>
        </div>    
    ) ;    
}

export default MiComponentePersonalizado;