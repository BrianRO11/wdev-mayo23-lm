import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import Persona from "./models/Persona";

interface PersonaContrato
{
    persona : Persona;
}

const ModalSiguiente:React.FC = () =>
{
    const totalSecciones = 3;
    const [seccionActual, setSeccionActual] = useState(0);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [persona, setPersona] = useState <Persona>({
        nombre: "",
        apellido1: "",
        apellido2:"", 
        edad:0
    });

    const cerrarModal =()=>{
        console.log(persona);
        setSeccionActual(1);
        setMostrarModal(false);
    }

    const abrirModal = () => {
        setSeccionActual(1);
        setMostrarModal(true);
    }

    const avanzarSeccionSiguiente = () =>
    {
            if(seccionActual <totalSecciones)
            {
                setSeccionActual(seccionActual +1);
            }
    }

    const devolverSeccionAnterior = () =>
    {
            if(seccionActual > 1)
            {
                setSeccionActual(seccionActual -1);
            }
    }

    const manejadorInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setPersona((prevPersona) => ({
            ...prevPersona,
            [name]: value,
          }));
    }

    return (
        <div>
            <Button onClick={abrirModal}>Abrir Modal</Button>

            <Modal show={mostrarModal} onHide={cerrarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Sección {seccionActual}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {seccionActual === 1 && (            
                        <Form.Control 
                            name = "nombre"
                            value ={ persona?.nombre}
                            onChange={manejadorInputChange}
                            placeholder="Colocar el nombre"></Form.Control>            
                    )}
                    {seccionActual === 2 && (
                        <div>
                            <Form.Control 
                                name = "apellido1"
                                value ={ persona?.apellido1}
                                onChange={manejadorInputChange}
                                placeholder="Colocar el apellido 1"></Form.Control>            
                            <Form.Control 
                                name = "apellido2"
                                value ={ persona?.apellido2}
                                onChange={manejadorInputChange}
                                placeholder="Colocar el apellido 2"></Form.Control>            
                        </div>                        
                    )}
                    {seccionActual === 3 && (
                        <Form.Control 
                            name = "edad"
                            value ={ persona?.edad}
                            onChange={manejadorInputChange}
                            placeholder="Colocar la edad"></Form.Control>
                    )}                    
                </Modal.Body>
                <Modal.Footer>
                    {seccionActual >1 &&(
                        <Button variant="warning" onClick={devolverSeccionAnterior}>Anterior</Button>
                    )}

                    {seccionActual < totalSecciones &&(
                        <Button variant="primary" onClick={avanzarSeccionSiguiente}>Siguient</Button>
                        )}

                    {seccionActual === totalSecciones &&(
                        <Button variant="success" onClick={cerrarModal}>Finalizar</Button>
                        )}
                </Modal.Footer>
            </Modal>
        </div>);
}

export default ModalSiguiente;