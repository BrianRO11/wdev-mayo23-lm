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
        eliminarCurso();
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
    for (const objetoIndividual of datos) 
{

    tablaResultado.innerHTML +=
`
<tr class="table-light" >
<td scope="row">${objetoindividual.id}</td>
<td>${objetoindividual.cedula}</td>
<td>${objetoindividual.correoelectronico}</td>
<td>${objetoindividual.telefono}</td>
<td>${objetoindividual.telefonocelular}</td>
<td>${objetoindividual.fechanacimiento}</td>
<td>${objetoindividual.sexo}</td>
<td>${objetoindividual.direccion}</td>
<td>${objetoindividual.nombre}</td>
<td>${objetoindividual.apellidopaterno}</td>
<td>${objetoindividual.apellidomaterno}</td>
<td>${objetoindividual.nacionalidad}</td>
<td>${objetoindividual.idCarreras}</td>
<td>${objetoindividual.usuario}</td>
<td>
    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="editarEstudiante('${objetoindividual.id}','${objetoindividual.cedula}','${objetoindividual.correoelectronico}','${objetoindividual.telefono}','${objetoindividual.telefonocelular}','${objetoindividual.fechanacimiento}','${objetoindividual.sexo}','${objetoindividual.direccion}','${objetoindividual.nombre}','${objetoindividual.apellidopaterno}','${objetoindividual.apellidomaterno}','${objetoindividual.nacionalidad}','${objetoindividual.idCarreras}')">Editar</a>
    ||
    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>

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

//--------------------------------------------------------FUNCION EDITAR CURSO ------------------------------------------------------

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
        "cedula" : $('#cedula').val(), 
        "correoelectronico" : $('#correoelectronico').val(), 
        "telefono" : $('#telefono').val(), 
        "telefonocelular" : $('#telefonocelular').val(), 
        "fechanacimiento" : $('#fechanacimiento').val(),
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
        url: ulrEditar,
        data: JSON.stringify(datosEnviar),
        dataType: "json",
        success: function (response) {
            modalEditarEstudiante.hide();
            editCompleto.show();
            RecargarTabla();
        }
    });
    
});
// Funcion eliminar

function eliminarCurso(id) 
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