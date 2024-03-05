import React from "react";
import "./Tecnologias.css"
import 'bootstrap/dist/css/bootstrap.min.css';


interface PropsTech{
    nombre : string,
    imagen : string
}

const GoogleTecnologias : React.FC <PropsTech>= (props) => {
    return(
        <div className="contenedorTecnologias" >
            <img src={require(`../src/img/${props.imagen}.png`)}></img>
            <h1>{props.nombre}</h1>
        </div>
        
    );
}

export default GoogleTecnologias;