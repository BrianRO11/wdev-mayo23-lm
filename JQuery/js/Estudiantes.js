let url = "https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php";    
let urlCrear = "https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php";
let ulrEditar = "https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php";
let urlBorrar = "https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php";

let crearEstudiante = $("#crearEstudiante").val();

const modalAgregarEstudiante = new bootstrap.Modal(document.getElementById('modalAgregarEstudiante'));
const modalEliminarEstudiante = new bootstrap.Modal(document.getElementById('modalEliminarEstudiante'));
const modalEditarEstudiante = new bootstrap.Modal(document.getElementById('modalEditarEstudiante'))
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
        eliminarEstudiante();
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
<td>${valor.nacionalidad}</td>
<td>${valor.idCarreras}</td>
<td>${valor.usuario}</td>
<td>
    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="editarEstudiante('${valor.id}','${valor.cedula}','${valor.correoelectronico}','${valor.telefono}','${valor.telefonocelular}','${valor.fechanacimiento}','${valor.sexo}','${valor.direccion}','${valor.nombre}','${valor.apellidopaterno}','${valor.apellidomaterno}','${valor.nacionalidad}','${valor.idCarreras}')">Editar</a>
    ||
    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="eliminarEstudiante('${valor.id}')">Eliminar</a>

</td>
</tr>
`;

}
}

//Funcion agregar

function mostrarModalAgregar() 

{

    modalAgregarEstudiante.show();

}

$("#crearEstudiante").submit(function (e) { 
    e.preventDefault();

   let datosEnviar = 
    {
    "cedula" : $('#cedula').val(), 
    "correoelectronico" : $('#correoelectronico').val(), 
    "telefono" : $('#telefono').val(), 
    "telefonocelular" : $('#telefonocelular').val(), 
    "fechanacimiento" : $('#fechanacimiento').val(),
    "sexo" : $('#sexo').val(),
    "direccion" : $('#direccion').val(),
    "nombre" : $('#nombre').val(),
    "apellidopaterno" : $('#apellidopaterno').val(),
    "apellidomaterno" : $('#apellidomaterno').val(),
    "nacionalidad" : $('#nacionalidad').val(),
    "idCarreras" : $('#idCarreras').val(),
    "usuario" : "Brian Rivas",
    }

    $.ajax({
        type: "post",
        url: urlCrear,
        data: JSON.stringify(datosEnviar),
        dataType: "json",
        success: function (response) {
            console.log(datosEnviar)
            completeInsert();
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
    });
    
});


function completeInsert () 
{
    window.location = "Estudiantes.html";
}

//Funcion Editar

function editarEstudiante (id , cedula , correoelectronico , telefono, telefonocelular, fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, idCarreras)
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
$("#nacionalidadeditar").val(nacionalidad);
$("#idCarreraseditar").val(idCarreras);

modalEditarEstudiante.show();
}

$("#editarEstudianteForm").submit(function (e) { 
    e.preventDefault();

    let datosEnviar = 
    {
        "cedula" : $('#cedulaeditar').val(), 
        "correoelectronico" : $('#correoelectronicoeditar').val(), 
        "telefono" : $('#telefonoeditar').val(), 
        "telefonocelular" : $('#telefonocelulareditar').val(), 
        "fechanacimiento" : $('#fechanacimientoeditar').val(),
        "sexo" : $('#sexoeditar').val(),
        "direccion" : $('#direccioneditar').val(),
        "nombre" : $('#nombreeditar').val(),
        "apellidopaterno" : $('#apellidopaternoeditar').val(),
        "apellidomaterno" : $('#apellidomaternoeditar').val(),
        "nacionalidad" : $('#nacionalidadeditar').val(),
        "idCarreras" : $('#idCarreraseditar').val(),
        "usuario" : "Brian Rivas",
    }

    $.ajax({
        type: "post",
        url: ulrEditar,
        data: JSON.stringify(datosEnviar),
        dataType: "json",
        success: function (response) {
            modalEditarEstudiante.hide();
            console.log(datosEnviar);
            editCompleto.show();
            RecargarTabla();
        }
    });
    
});
// Funcion eliminar

function eliminarEstudiante(id) 
{
    var datosEnviar = {"id":id}

$.ajax({
    type: "post",
    url: urlBorrar,
    data: JSON.stringify(datosEnviar),
    dataType: "json",
    success: function (response) {
        modalEliminarEstudiante.show();
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