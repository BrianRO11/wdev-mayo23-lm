import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap"

const ModalSaludando : React.FC = () =>
{
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () =>{
        setIsOpen(true);
    }

    const closeModal = () =>{
        setIsOpen(false);
    }

    return (
        <div>
            <Button variant="success" onClick={openModal}>Abrir Modal</Button>
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header>
                    <Modal.Title>Mi Primer Titulo</Modal.Title>    
                </Modal.Header>    
                <Modal.Body>
                    <p>Este es mi primer contenido usando el modal de react boostrap</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={closeModal}>Guardar</Button>
                    <Button variant="danger" onClick={closeModal}>Cancelar</Button>
                </Modal.Footer>
            </Modal>          
        </div>
    );
}

export default ModalSaludando;