import React from "react";
import Persona from "./models/Persona";
import MiComponentePersonalizado from "./MiComponentePersonalizado";

const MiComponentePersonalizadoPadre : React.FC = () =>
{
    const personaEjemplo = new Persona("Adolfo", "Vargas", "Sandoval",31);

    return (
        <div>
            <h3>Informacion de la persona</h3>
            <MiComponentePersonalizado 
                persona={personaEjemplo}></MiComponentePersonalizado>            
        </div>
    )

}

export default MiComponentePersonalizadoPadre;