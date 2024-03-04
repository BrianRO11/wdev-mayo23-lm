import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import './Formulario.css'
import Form from 'react-bootstrap/Form';

const GoogleFormulario : React.FC = () =>{

    const [comentario, setComentario] = useState("");
    const [aviso, setAviso] = useState("comentario");
    const [contador, setContador] = useState(50);
    const [deshabilitar, setDeshabilitar] = useState(false);

    const LimiteComentario = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setContador(contador - 1);
        setComentario(e.target.value);

        if(contador === 1){
            setDeshabilitar(true);
        }
        else{
            setDeshabilitar(false);
        }

        if(comentario.length > 49){
            setAviso("rojo");
        }
        else if(comentario.length < 49){            
        setAviso("comentario");       
        }
    }

    return (
        <div className="contenedorFormulario">
            <h1>Digite sus datos personales:</h1>
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
                <textarea required disabled = {deshabilitar} id="comentarioID" value={comentario} onChange={LimiteComentario} className= {aviso} ></textarea> 
                </div>            
                <Button type="submit" className="botonEnviar" >Enviar</Button>
            </Form>
            
        </div>
    );
}

export default GoogleFormulario;