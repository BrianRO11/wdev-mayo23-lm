import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Tecnologias.css"

interface PropsTechnologias{
    nombre : string,
    imagen : string
}

const GoogleTecnologias : React.FC <PropsTechnologias>= (props) => {
    return(
        <div className="contenedorTecnologias">
            <h1 className="imagenTecnologias">{props.nombre}</h1>
            <img className="imagenTestimonio" src={require(`../src/img/${props.imagen}.png`)}></img>
        </div>
        
    );
}

export default GoogleTecnologias;