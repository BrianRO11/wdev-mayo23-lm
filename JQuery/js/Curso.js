let url = "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php";    
let urlCrear = "https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php";
let ulrEditar = "https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php";
let urlBorrar = "https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php";

let crearCurso = $("#crearCurso").val();

const modalAgregarCurso = new bootstrap.Modal(document.getElementById('modalAgregarCurso'));
const modalEliminarCurso = new bootstrap.Modal(document.getElementById('modalEliminarCurso'));
const modalEditarCurso = new bootstrap.Modal(document.getElementById('modalEditarCurso'))
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
<td scope="row">${objetoIndividual.id}</td>
<td>${objetoIndividual.nombre}</td>
<td>${objetoIndividual.descripcion}</td>
<td>${objetoIndividual.tiempo}</td>
<td>${objetoIndividual.usuario}</td>
<td>
<a name="editar" id="editar" class="btn btn-primary" role="button" onclick="editarCurso('${objetoIndividual.id}' , '${objetoIndividual.nombre}' , '${objetoIndividual.descripcion}' , '${objetoIndividual.tiempo}')">Editar</a>
<a name="borrarCurso" id="borrarCurso" class="btn btn-danger" role="button" onclick="eliminarCurso('${objetoIndividual.id}')">Eliminar</a>
</td>
</tr>
`;

}
}

//Funcion agregar

function mostrarModalAgregar() 

{

modalAgregarCurso.show();

}

$("#crearCurso").submit(function (e) { 
    e.preventDefault();

   let datosEnviar = 
    {
    "nombre" : $('#nombreCrear').val(), 
    "descripcion" : $('#descripcionCrear').val(), 
    "tiempo" : $('#tiempoCrear').val(), 
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
    window.location = "courses.html";
}

//--------------------------------------------------------FUNCION EDITAR CURSO ------------------------------------------------------

function editarCurso (id , nombre , descripcion , tiempo)
{

$("#idEditar").val(id);
$("#nombreEditar").val(nombre);
$("#descripcionEditar").val(descripcion);
$("#tiempoEditar").val(tiempo);

modalEditarCurso.show();
}

$("#editarCursoForm").submit(function (e) { 
    e.preventDefault();

    let datosEnviar = 
    {
    "id" : $('#idEditar').val(), 
    "nombre" : $('#nombreEditar').val(), 
    "descripcion" : $('#descripcionEditar').val(), 
    "tiempo" : $('#tiempoEditar').val(), 
    "usuario" : "Brian Rivas",
    }

    $.ajax({
        type: "post",
        url: ulrEditar,
        data: JSON.stringify(datosEnviar),
        dataType: "json",
        success: function (response) {
            modalEditarCurso.hide();
            editCompleto.show();
            RecargarTabla();
        }
    });
    
});
//--------------------------------------------------------FUNCION ELIMINAR CURSO ------------------------------------------------------

function eliminarCurso(id) 
{
    var datosEnviar = {"id":id}

$.ajax({
    type: "post",
    url: urlBorrar,
    data: JSON.stringify(datosEnviar),
    dataType: "json",
    success: function (response) {
        modalEliminarCurso.show();
        RecargarTabla();
    }
});
}

//--------------------------------------------------------FUNCION RECARGAR TABLA------------------------------------------------------
function RecargarTabla() 
{
    tablaResultado.innerHTML = ``;
    mostrarDatos();
}