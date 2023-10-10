let url = "https://paginas-web-cr.com/ApiPHP/apis/ListaProfesores.php";    
let urlCrear = "https://paginas-web-cr.com/ApiPHP/apis/InsertarProfesores.php";
let ulrEditar = "https://paginas-web-cr.com/ApiPHP/apis/ActualizarProfesores.php";
let urlBorrar = "https://paginas-web-cr.com/ApiPHP/apis/BorrarProfesores.php";

let crearProfesor = $("#crearProfesor").val();

const modalAgregarProfesor = new bootstrap.Modal(document.getElementById('modalAgregarProfesor'));
const modalEliminarProfesor = new bootstrap.Modal(document.getElementById('modalEliminarProfesor'));
const modalEditarProfesor = new bootstrap.Modal(document.getElementById('modalEditarProfesor'))
const editCompleto = new bootstrap.Modal(document.getElementById('editCompleto'))


//Funcion Mostrar

$(document).ready(function () {
    mostrarDatos();
    $("#RecargarTabla").click(function (e) { 
        e.preventDefault();
        RecargarTabla();
    });
    $("#borrarCurso").click(function (e) { 
        e.preventDefault();
        eliminarProfesor();
    });
});

function mostrarDatos () 
{
    $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        success: function (response) {
            ajustarDatos(response.data);
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        },
        
    });

    
}

function ajustarDatos (datos) {
    console.log("datos" + datos);
    for (const valor of datos) 
{

    tablaResultado.innerHTML +=
`
<tr class="table-light" >
<td scope="row">${valor.id}</td>
<td>${valor.cedula}</td>
<td>${valor.correoelectronico}</td>
<td>${valor.telefono}</td>
<td>${valor.telefonocelular}</td>
<td>${valor.fechanacimiento}</td>
<td>${valor.sexo}</td>
<td>${valor.direccion}</td>
<td>${valor.nombre}</td>
<td>${valor.apellidopaterno}</td>
<td>${valor.apellidomaterno}</td>
<td>${valor.idCarreras}</td>
<td>${valor.usuario}</td>
<td>${valor.nacionalidad}</td>
<td>
    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="editarProfesor('${valor.id}','${valor.cedula}','${valor.correoelectronico}','${valor.telefono}','${valor.telefonocelular}','${valor.fechanacimiento}','${valor.sexo}','${valor.direccion}','${valor.nombre}','${valor.apellidopaterno}','${valor.apellidomaterno}','${valor.idCarreras}','${valor.nacionalidad}')">Editar</a>
    ||
    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="eliminarProfesor('${valor.id}')">Eliminar</a>

</td>
</tr>
`;

}
}

//Funcion agregar

function mostrarModalAgregar() 

{

    modalAgregarProfesor.show();

}

$("#crearProfesor").submit(function (e) { 
    e.preventDefault();

   let datosEnviar = 
    {
    "cedula" : $('#cedula').val(), 
    "correoelectronico" : $('#correoelectronico').val(), 
    "telefono" : $('#telefono').val(), 
    "telefonocelular" : $('#telefonocelular').val(), 
    "fechanacimiento" : $('#fechanacimiento').val(),
    "direccion" : $('#direccion').val(),
    "nombre" : $('#nombre').val(),
    "apellidopaterno" : $('#apellidopaterno').val(),
    "apellidomaterno" : $('#apellidomaterno').val(),
    "idCarreras" : $('#idCarreras').val(),
    "nacionalidad" : $('#nacionalidad').val(),
    "usuario" : "Brian Rivas",
    }

    $.ajax({
        type: "post",
        url: urlCrear,
        data: JSON.stringify(datosEnviar),
        dataType: "json",
        success: function (response) {
            completeInsert();
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
    });
    
});


function completeInsert () 
{
    window.location = "Profesores.html";
}

//Funcion Editar

function editarProfesor (id , cedula , correoelectronico , telefono, telefonocelular, fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, idCarreras)
{

$("#idEditar").val(id);
$("#cedulaeditar").val(cedula);
$("#correoelectronicoeditar").val(correoelectronico);
$("#telefonoeditar").val(telefono);
$("#telefonocelulareditar").val(telefonocelular);
$("#fechanacimientoeditar").val(fechanacimiento);
$("#sexoeditar").val(sexo);
$("#direccioneditar").val(direccion);
$("#nombreeditar").val(nombre);
$("#apellidopaternoeditar").val(apellidopaterno);
$("#apellidomaternoeditar").val(apellidomaterno);
$("#idCarreraseditar").val(idCarreras);
$("#nacionalidadeditar").val(nacionalidad);



modalEditarProfesor.show();
}

$("#editarProfesorForm").submit(function (e) { 
    e.preventDefault();

    let datosEnviar = 
    {
        "cedula" : $('#cedula').val(), 
        "correoelectronico" : $('#correoelectronico').val(), 
        "telefono" : $('#telefono').val(), 
        "telefonocelular" : $('#telefonocelular').val(), 
        "fechanacimiento" : $('#fechanacimiento').val(),
        "direccion" : $('#direccion').val(),
        "nombre" : $('#nombre').val(),
        "apellidopaterno" : $('#apellidopaterno').val(),
        "apellidomaterno" : $('#apellidomaterno').val(),
        "idCarreras" : $('#idCarreras').val(),
        "nacionalidad" : $('#nacionalidad').val(),
        "usuario" : "Brian Rivas",
    }

    $.ajax({
        type: "post",
        url: ulrEditar,
        data: JSON.stringify(datosEnviar),
        dataType: "json",
        success: function (response) {
            modalEditarProfesor.hide();
            editCompleto.show();
            RecargarTabla();
        }
    });
    
});

// Funcion eliminar

function eliminarProfesor(id) 
{
    var datosEnviar = {"id":id}

$.ajax({
    type: "post",
    url: urlBorrar,
    data: JSON.stringify(datosEnviar),
    dataType: "json",
    success: function (response) {
        modalEliminarProfesor.show();
        RecargarTabla();
    }
});
}

// Funcion recargar tabla
function RecargarTabla() 
{
    tablaResultado.innerHTML = ``;
    mostrarDatos();
}