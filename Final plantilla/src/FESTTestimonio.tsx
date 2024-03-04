import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface TestimonioProps{
    nombre : string,
    edad : number,
    cargo : string,
    imagen : string,
    testimonio : string
}

const FESTTestimonio : React.FC<TestimonioProps> = (props) =>{


    return(
            <div className="contenedorTestimonio">
                <img className="imagenTestimonio" src={require(`../src/img/${props.imagen}.jpg`)}></img>
                <div className="contenedorTextoTestimonio">
                    <p className="nombreTestimonio"> {props.nombre} - {props.edad}</p>
                    <p className="cargoTestimonio">{props.cargo}</p>
                    <p className="textoTestimonio">{props.testimonio}</p>
                </div>
            </div>
        )  
}
export default FESTTestimonio;
