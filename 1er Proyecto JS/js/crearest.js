var formularioEst = document.getElementById('formularioEst');
const modalSuccessEst = new bootstrap.Modal(document.getElementById('modalSuccessEst'));

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrearEst = "InsertarEstudiantes.php";

formularioEst.addEventListener('submit', function(e){

    e.preventDefault();
    var datosCrearEst = {
        "cedula":document.getElementById('cedula').value ,
        "correo":document.getElementById('correoelectronico').value ,
        "telefono":document.getElementById('telefono').value ,
        "telefonocelular":document.getElementById('telefonocelular').value ,
        "fechanacimiento":document.getElementById('fechanacimiento').value ,
        "sexo":document.getElementById('sexo').value ,
        "direccion":document.getElementById('direccion').value ,
        "nombre":document.getElementById('nombre').value ,
        "apellidopaterno":document.getElementById('apellidopaterno').value ,
        "apellidomaterno":document.getElementById('apellidomaterno').value ,
        "nacionalidad":document.getElementById('nacionalidad').value ,
        "idCarreras":document.getElementById('idCarreras').value ,
        "usuario":"Brian Rivas"
    }
    apiurl = apibase + apicrearEst ;
    fetch(apiurl,
        {
            method:'POST',
            body: JSON.stringify(datosCrearEst)
        })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
            modalSuccessEst.show()
            completeInsert()
        })
    .catch(console.log);

    //console.log(datosEnviarEst);

})


function completeInsert(){
    window.location = 'listarest.html';
}