import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonio.css'

interface TestProps{
    nombre : string,
    edad : number, 
    cargo : string,
    imagen : string,
    testimonio : string
}

const GoogleTestimonio : React.FC<TestProps> = (props) =>{


    return(
            <div className="TestContenedor">
                <img className="TestImagen" src={require(`../src/img/${props.imagen}.jpg`)}></img>
                <div className="TestContenedorTexto">
                    <h2 className="TestCargo">{props.cargo}</h2>
                    <h1 className="TestNombre"> {props.nombre}</h1>
                    <h2 className="TestEdad"> {props.edad}</h2>
                    <p className="TestTexto">{props.testimonio}</p>
                </div>
            </div>
        )  
}
export default GoogleTestimonio;
