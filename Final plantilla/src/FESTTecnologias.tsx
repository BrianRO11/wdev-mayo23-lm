import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/FESTTecnologias.css';

interface TechnologiasProps{
    nombre : string,
    imagen : string
}

const FESTTecnologias : React.FC <TechnologiasProps>= (props) => {
    return(
        <div className="contenedorTecnologias">
            <h1 className="imagenTecnologias">{props.nombre}</h1>
            <img className="imagenTestimonio" src={require(`../src/img/${props.imagen}.png`)}></img>
        </div>
        
    );
}

export default FESTTecnologias;