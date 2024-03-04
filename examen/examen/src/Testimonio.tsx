import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonio.css'

interface TestimonioProps{
    nombre : string,
    edad : number,
    cargo : string,
    imagen : string,
    testimonio : string
}

const GoogleTestimonio : React.FC<TestimonioProps> = (props) =>{


    return(
            <div className="TestContenedor">
                <img className="TestImagen" src={require(`../src/img/${props.imagen}.jpg`)}></img>
                <div className="TestContenedorTexto">
                    <p className="TestNombre"> {props.nombre} - {props.edad}</p>
                    <p className="TestCargo">{props.cargo}</p>
                    <p className="TestTexto">{props.testimonio}</p>
                </div>
            </div>
        )  
}
export default GoogleTestimonio;
