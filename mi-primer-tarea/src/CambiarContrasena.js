import React from "react";

function CambiarContrasena()
{
    return (
        <div>
            <h1>Cambiando contrasena</h1>
            <input type="password" className="form-control" placeholder="Ingresa contrasena"></input>
            <input type="password" className="form-control" placeholder="Confirmar contrasena"></input>
            <br></br>
            <button className="btn btn-primary">Cambiar contrasena</button>
        </div>
    );
}

export default CambiarContrasena;

/*
    Si la contrasena tiene menos de 10 caracteres, entonces de color rojo
    Si la contrasena tiene entre 11 y 13 caracteres, entonces de color amarillo
    Si la contrasena tiene mas de 14 caracteres, entonces usted coloque de color verde

    Usted tiene que validar que ambas contrasena sean iguales. 

    OnClic para validar con las contrasenas, la nueva y la confirmacion
    OnInput para validar la seguridad de la contrana

    Opcional: que tenga al menos un caracter especial /*.!#%&, validar en el onClic
*/