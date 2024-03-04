import React from "react";
import './General.css';
import { Button, Table } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const Formulario1 : React.FC = () =>{
    return (
        <div>
            <h1>Estas son las etiquetas ahora con react boostrap</h1>
            <Form.Label>Hola mundo esto es un label</Form.Label>
            <Form.Control placeholder="Esto es un input"></Form.Control>
            <Form.Label>Esto es un select</Form.Label>
            <Form.Select>
                <option value="1">SQL</option>                
                <option value="2">FrontEnd</option>                
                <option value="3">Python</option>
            </Form.Select>
            <Form.Label>Esto es un checkbox</Form.Label>
            <Form.Check type="checkbox" label="Vio terminos y condiciones"></Form.Check>
            <Form.Check type="checkbox" label="Es mayor de edad"></Form.Check>
            <Form.Label>Esto es una tabla</Form.Label>
            <Table className="table">
                <thead>
                    <th>Id Persona</th>
                    <th>Nombre Completo</th>
                </thead>
                <tbody>
                    <tr>
                        <td>12345</td>
                        <td>Adolfo Vargas Sandoval</td>
                    </tr>
                    <tr>
                        <td>56789</td>
                        <td>Angie Obando Brenes</td>
                    </tr>
                </tbody>
            </Table>
            <Form.Label className="colorEtiquetado">Esto es una tabla</Form.Label>
            <br></br>
            <Button variant="primary">Aceptar</Button>
            <Button variant="success">Aceptar</Button>
            <Button variant="warning">Aceptar</Button>
            <Button className="btn btn-success">Hola mundo</Button>
        </div>
    );
}

export default Formulario1;