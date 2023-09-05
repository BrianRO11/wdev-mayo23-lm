function consultardatos(){
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php"
    .then(respuesta => respuesta.json())
    .then ((datosrespuesta => {
        console.log(datosrespuesta)
    }
        ))
        .catch(console.log);
}

consultardatos();