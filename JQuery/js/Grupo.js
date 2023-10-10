let url = "https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php";    
let urlCrear = "https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php";
let ulrEditar = "https://paginas-web-cr.com/ApiPHP/apis/ActualizarGrupo.php";
let urlBorrar = "https://paginas-web-cr.com/ApiPHP/apis/BorrarGrupo.php";

let creargrupo = $("#creargrupo").val();

const modalAgregargrupo = new bootstrap.Modal(document.getElementById('modalAgregargrupo'));
const modalEliminargrupo = new bootstrap.Modal(document.getElementById('modalEliminargrupo'));
const modalEditargrupo = new bootstrap.Modal(document.getElementById('modalEditargrupo'))
const editCompleto = new bootstrap.Modal(document.getElementById('editCompleto'))


//Funcion Mostrar

$(document).ready(function () {
    mostrarDatos();
    $("#RecargarTabla").click(function (e) { 
        e.preventDefault();
        RecargarTabla();
    });
    $("#borrargrupo").click(function (e) { 
        e.preventDefault();
        eliminargrupo();
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
<td>
<a name="editar" id="editar" class="btn btn-primary" role="button" onclick="editargrupo('${objetoIndividual.id}' , '${objetoIndividual.nombre}' )">Editar</a>
<a name="borrargrupo" id="borrargrupo" class="btn btn-danger" role="button" onclick="eliminargrupo('${objetoIndividual.id}')">Eliminar</a>
</td>
</tr>
`;

}
}

//Funcion agregar

function mostrarModalAgregar() 

{

modalAgregargrupo.show();

}

$("#creargrupo").submit(function (e) { 
    e.preventDefault();

   let datosEnviar = 
    {
    "nombre" : $('#nombreCrear').val(), 
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
    window.location = "Grupo.html";
}

//Funcion Editar

function editargrupo (id , nombre)
{

$("#idEditar").val(id);
$("#nombreEditar").val(nombre);

modalEditargrupo.show();
}

$("#editargrupoForm").submit(function (e) { 
    e.preventDefault();

    let datosEnviar = 
    {
    "id" : $('#idEditar').val(), 
    "nombre" : $('#nombreEditar').val(), 
    }

    $.ajax({
        type: "post",
        url: ulrEditar,
        data: JSON.stringify(datosEnviar),
        dataType: "json",
        success: function (response) {
            modalEditargrupo.hide();
            editCompleto.show();
            RecargarTabla();
        }
    });
    
});
//Funcion Eliminar 

function eliminargrupo(id) 
{
    var datosEnviar = {"id":id}

$.ajax({
    type: "post",
    url: urlBorrar,
    data: JSON.stringify(datosEnviar),
    dataType: "json",
    success: function (response) {
        modalEliminargrupo.show();
        RecargarTabla();
    }
});
}

//Funcion recargar tabla
function RecargarTabla() 
{
    tablaResultado.innerHTML = ``;
    mostrarDatos();
}