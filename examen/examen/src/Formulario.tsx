import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import './Formulario.css'

const GoogleFormulario : React.FC = () =>{

    const [coment, setComent] = useState("");
    const [aviso, setAviso] = useState("comentario");
    const [contador, setContador] = useState(50);

    const LimiteComent = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setContador(contador - 1);
        setComent(e.target.value);


        if(coment.length > 49){
            setAviso("rojo");
        }
        else if(coment.length < 49){            
        setAviso("comentario");       
        }
    }

    return (
        <div className="contenedorFormulario">
            <h1>Ingrese sus datos personales:</h1>
            <Form>
                <Form.Label className="label">Nombre</Form.Label>
                <Form.Control required className="form" placeholder="Nombre Completo"></Form.Control>
                <Form.Label className="label">Correo</Form.Label>
                <Form.Control required className="form" placeholder="Correo"></Form.Control>
                <Form.Label className="label">Teléfono</Form.Label>
                <Form.Control required className="form" placeholder="Teléfono"></Form.Control>
                <Form.Label className="label">Comentario</Form.Label>
                <div className="comentarios">
                <Form.Label className="label">Caracteres: {contador}</Form.Label>
                <textarea required  id="comentarioID" value={coment} onChange={LimiteComent} className= {aviso} ></textarea> 
                </div>            
                <Button type="submit" className="botonEnviar" >Enviar</Button>
            </Form>
            
        </div>
    );
}

export default GoogleFormulario;