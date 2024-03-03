class Persona {
    nombre: string;
    apellido1: string;
    apellido2: string;
    edad: number

    constructor(pNombre: string, pApellido1: string, pApellido2: string, edad: number)
    {
        this.nombre = pNombre;
        this.apellido1 = pApellido1;
        this.apellido2 = pApellido2;
        this.edad = edad;
    }

    
}

export default Persona;