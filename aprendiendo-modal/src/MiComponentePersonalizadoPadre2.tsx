import React from "react";
import Persona from "./models/Persona";

const MiComponentePersonalizadoPadre2 : React.FC = () =>
{
    const personas: Persona[] = [];

    const personaEjemplo = new Persona("Adolfo", "Vargas", "Sandoval",31);
    const personaEjemplo1 = new Persona("Edwin", "Wilfredo", "Ceron",28);
    const personaEjemplo2 = new Persona("Erick", "Jimenez", "Solano",25);
    const personaEjemplo3 = new Persona("German", "Ariza", "Salas",21);

    personas.push(personaEjemplo);
    personas.push(personaEjemplo1);
    personas.push(personaEjemplo2);
    personas.push(personaEjemplo3);

    return (
        <div>
            <h3>Las personas registradas son:</h3>
            <table>
                <thead>
                    <th>Nombre</th>
                    <th>Primer Apellido</th>
                    <th>Segundo Apellido</th>
                    <th>Edad</th>
                </thead>
                <tbody>
                    {
                        personas.map((per, index) => (
                            <tr key={index}>
                                <td>{per.nombre}</td>
                                <td>{per.apellido1}</td>
                                <td>{per.apellido2}</td>
                                <td>{per.edad}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>);
}

export default MiComponentePersonalizadoPadre2;