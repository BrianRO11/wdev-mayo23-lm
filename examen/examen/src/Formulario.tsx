import React, { useState } from "react";
import './Formulario.css';
import { Button, Form } from "react-bootstrap";

const GoogleFormulario: React.FC = () => {
    const [comentario, setComentario] = useState("");
    const [aviso, setAviso] = useState("comentario");
    const [deshabilitar, setDeshabilitar] = useState(false);
    const [contador, setContador] = useState(50);

    const limiteComentario = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textoComentario = e.target.value;
        setComentario(textoComentario);
        setContador(50 - textoComentario.length);
        setDeshabilitar(textoComentario.length === 50);

        if (textoComentario.length > 49) {
            setAviso("rojo");
        } else {
            setAviso("comentario");
        }
    }

    return (
        <div className="contenedorFormulario">
            <h1>Ingrese sus datos personales:</h1>
            <Form>
                <Form.Group controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre Completo" required />
                </Form.Group>

                <Form.Group controlId="formCorreo">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Correo" required />
                </Form.Group>

                <Form.Group controlId="formTelefono">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="tel" placeholder="Teléfono" required />
                </Form.Group>

                <Form.Group controlId="formComentario">
                    <Form.Label>Comentario</Form.Label>
                    <div className="comentarios">
                        <Form.Label>Caracteres restantes: {contador}</Form.Label>
                        <Form.Control required as="textarea" rows={3} value={comentario} onChange={limiteComentario} className={aviso} disabled={deshabilitar}
                        />
                    </div>
                </Form.Group>

                <Button type="submit" className="botonEnviar">Enviar</Button>
            </Form>
        </div>
    );
}

export default GoogleFormulario;
