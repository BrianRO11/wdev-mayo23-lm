var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultar = "ListaEstudiantes.php";
var apieliminar = "BorrarEstudiantes.php";
var apieditar = "ActualizarEstudiantes.php";

const myModalEliminar = new bootstrap.Modal(document.getElementById('myModalEliminar'));
const myModalEditar = new bootstrap.Modal(document.getElementById('myModalEditar'));
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'))

let tablaresultado = document.querySelector('#tablaresultado');

function consultardatos(){
    //fetch sirve para extraer, insertar modificar, eliminar consultardatos, 
    apiurl = apibase + apiconsultar ;
    fetch(apiurl)
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
            //ajustardatostabla
            console.log(datosrespuesta.code) 
            console.log(datosrespuesta.data) 
            ajustardatostabla(datosrespuesta.data) 
        })
    .catch(console.log);
}

function ajustardatostabla(datos){
    console.log("datos"+datos);
    for (const objetoindividual of datos) {
       tablaresultado.innerHTML += `
            <tr class="table-primary">
                                <td scope="row">${objetoindividual.id}</td>
                                <td>${objetoindividual.cedula}</td>
                                <td>${objetoindividual.correo}</td>
                                <td>${objetoindividual.telefono}</td>
                                <td>${objetoindividual.celular}</td>
                                <td>${objetoindividual.fechanacimiento}</td>
                                <td>${objetoindividual.sexo}</td>
                                <td>${objetoindividual.direccion}</td>
                                <td>${objetoindividual.nombre}</td>
                                <td>${objetoindividual.apellidopaterno}</td>
                                <td>${objetoindividual.apellidomaterno}</td>
                                <td>${objetoindividual.nacionalidad}</td>
                                <td>${objetoindividual.usuario}</td>
                                <td>
                                    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.cedula}','${objetoindividual.correo}','${objetoindividual.telefono}','${objetoindividual.celular}','${objetoindividual.fechanacimiento}','${objetoindividual.sexo}','${objetoindividual.direccion}','${objetoindividual.nombre}','${objetoindividual.apellidopaterno}','${objetoindividual.apellidomaterno}','${objetoindividual.nacionalidad}')">Editar</a>
                                    ||
                                    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
                                </td>                              
            </tr>
       `;
    }   
}


    function mostrarModal(id){

        eliminandodato(id);

        myModalEliminar.show();
        
    }

    function eliminandodato(id){

        var datosEnviar = { 
            "id":id 
        }

        apiurl = apibase + apieliminar ;
        fetch(apiurl,
            {
                method:'POST',
                body: JSON.stringify(datosEnviar)
            })
        .then(estructura => estructura.json())
        .then((datosrespuesta) => {
                completeDelete()
            })
        .catch(console.log);
    }

    function completeDelete(){
        myModalEliminar.hide();
        tablaresultado.innerHTML = ``;
        consultardatos();
        
    }

    function mostrarEditarModal(id, cedula, correo, telefono, celular, fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, usuario ){
        document.getElementById('id').value = id;
        document.getElementById('cedula').value = cedula;
        document.getElementById('correo').value = correo;
        document.getElementById('telefono').value = telefono;
        document.getElementById('celular').value = celular;
        document.getElementById('fechanacimiento').value = fechanacimiento;
        document.getElementById('sexo').value = sexo;
        document.getElementById('direccion').value = direccion;
        document.getElementById('nombre').value = nombre;
        document.getElementById('apellidopaterno').value = apellidopaterno;
        document.getElementById('apellidomaterno').value = apellidomaterno;
        document.getElementById('nacionalidad').value = nacionalidad;
        
        myModalEditar.show();
    }


formulario.addEventListener('submit', function(e)
{
    e.preventDefault();
    //alert('salvadndo');

    var datosEnviar = { 
        "id":document.getElementById('id').value ,
        "cedula":document.getElementById('cedula').value ,
        "correo":document.getElementById('correo').value ,
        "telefono":document.getElementById('telefono').value ,
        "celular":document.getElementById('celular').value ,
        "fechanacimiento":document.getElementById('fechanacimiento').value ,
        "sexo":document.getElementById('sexo').value ,
        "direccion":document.getElementById('direccion').value ,
        "nombre":document.getElementById('nombre').value ,
        "apellidopaterno":document.getElementById('apellidopaterno').value ,
        "apellidomaterno":document.getElementById('apellidomaterno').value ,
        "nacionalidad":document.getElementById('nacionalidad').value ,

        "usuario":"Brian Rivas"
    }

    apiurl = apibase + apieditar ;
    fetch(apiurl,
        {
            method:'POST',
            body: JSON.stringify(datosEnviar)
        })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        //alert("Salvado")
            modalSuccess.show()
            completeInsert()
        })
    .catch(console.log);

   
});

function completeInsert(){
    
}


consultardatos();