import React from "react";
import './Resena.css';

interface ResenaProps {
    titulo: string;
    contenido: string;
}

const GoogleResena: React.FC<ResenaProps> = ({ titulo, contenido }) => {
    return (
        <div className="Rcontenedor">
            <div className="Rtexto">
                <h1>{titulo}</h1>
                <p>{contenido}</p>
            </div>
        </div>
    );
}

export default GoogleResena;
