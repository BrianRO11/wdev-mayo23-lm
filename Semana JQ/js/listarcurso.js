var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultar = "ListaCurso.php";
var apieliminar = "BorrarCursos.php";
var apieditar = "ActualizarCursos.php";
let tablaresultado = document.querySelector('#tablaresultado');



const myModalEliminar = new bootstrap.Modal(document.getElementById('myModalEliminar'));
const myModalEditar = new bootstrap.Modal(document.getElementById('myModalEditar'));
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'))

var url = "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php";



$(document).ready(function () {

    //let tablaresultado = document.querySelector('#tablaresultado');
    consultardatos();

});

function consultardatos() {
    apiurl = apibase + apiconsultar
    $.ajax({
        type: "POST",
        url: apiurl,
        dataType: "json",
        success: function (response) {
            ajustardatostabla(response.data);
            console.log(response);
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
    });
}


function ajustardatostabla(datos){
  console.log("datos" + datos);
for (const objetoIndividual of datos) {

    tablaresultado.innerHTML += `
        <tr class="table-primary" >
                            <td scope="row">${objetoIndividual.id}</td>
                            <td>${objetoIndividual.nombre}</td>
                            <td>${objetoIndividual.descripcion}</td>
                            <td>${objetoIndividual.tiempo}</td>
                            <td>${objetoIndividual.usuario}</td>
                            <td>
                                <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="EditarCurso('${objetoIndividual.id}','${objetoIndividual.nombre}','${objetoIndividual.descripcion}','${objetoIndividual.tiempo}')">Editar</a>
                                ||
                                <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="EliminarCurso('${objetoIndividual.id}')">Eliminar</a>
                            </td>                              
        </tr>
    `;
}


function EliminarCurso(id){
alert("eliminando");
eliminardato(id);
myModalEliminar.show();


} 
function eliminardato(){

    var datosenviar = {
    "id" : id
    }
    console.log(datosenviar);

    apiurl = apibase + apieliminar;
    $.ajax({
    type: "POST",
    url: apiurl,
    data: JSON.stringify(datosenviar),
    dataType: "json",
    success: function (response) {
        completeDelete();
    },
    error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
    });
  
  }
  
  function completeDelete(){
    myModalEliminar.hide();
    tablaresultado.innerHTML = ``;
    consultardatos();
  
  } 
  function EditarCurso (id,nombre,descripcion,tiempo,){
    $("#id").val(id) ,     
    $("#nombre").val(nombre) ,
    $("#descripcion").val(descripcion) ,
    $("#tiempo").val(tiempo) ,

    myModalEditar.show();

  }
  $("#btnenviar").click(function (e) { 
    e.preventDefault();
    var datoseditar = {
        id: $("#id").val() ,     
        nombre: $("#nombre").val() ,
        descripcion: $("#descripcion").val() ,
        tiempo: $("#tiempo").val() ,
        usuario: "Patricio Rdz"
    }

    console.log(datoseditar);
    apiurl = apibase + apieditar;
    $.ajax({
        type: "post",
        url: "apiurl",
        data: JSON.stringify(datoseditar),
        dataType: "json",
        success: function (response) {
            completeEdit()
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
    });

  });
}
function completeEdit() {
    myModalEditar.hide();
    tablaresultado.innerHTML = ``;
    consultardatos();
}
consultardatos();


