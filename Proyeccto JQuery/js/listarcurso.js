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
    cargardatos();
});

function cargardatos(){
    $.ajax({
        type: "POST",
        url: "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php",                
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

//         function consultardatos(){
//     //fetch sirve para extraer, insertar modificar, eliminar consultardatos, 
//     apiurl = apibase + apiconsultar ;
//     fetch(apiurl)
//     .then(estructura => estructura.json())
//     .then((datosrespuesta) => {
//             //ajustardatostabla
//             console.log(datosrespuesta.code) 
//             console.log(datosrespuesta.data) 
//             ajustardatostabla(datosrespuesta.data) 
//         })
//     .catch(console.log);
// }

function ajustardatostabla(datos){
for (const objetoindividual of datos) {
    tablaresultado.innerHTML += `
    <tr class="table-primary">
                        <td scope="row">${objetoindividual.id}</td>
                        <td>${objetoindividual.nombre}</td>
                        <td>${objetoindividual.descripcion}</td>
                        <td>${objetoindividual.tiempo}</td>
                        <td>${objetoindividual.usuario}</td>
                        <td>
                            <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.nombre}','${objetoindividual.descripcion}','${objetoindividual.tiempo}')">Editar</a>
                            ||
                            <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
                        </td>                              
    </tr>
`;
}   
}

function mostrarEditarModal(id, nombre, descripcion, tiempo){
document.getElementById('id').value = id;
document.getElementById('nombre').value = nombre;
document.getElementById('descripcion').value = descripcion;
document.getElementById('tiempo').value = tiempo;
//myModalEditar.show();
}

function crearCurso(){

$.ajax({
type: "method",
url: "url",
data: objeto,
dataType: "dataType",
success: function (response) {
    
}
});    
}

function mostrarModal(id){

eliminandodato(id);
myModalEliminar.show();

}

function eliminandodato(id){

var datosEnviar = { 
"id":id 
}
console.log(datosEnviar);


}


