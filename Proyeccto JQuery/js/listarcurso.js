<!doctype html>
<html lang="en">

<head>
  <title>Title</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.1 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

    <script>

        var url = "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php";

        $(document).ready(function () {
            cargardatos();
        });
        
        function cargardatos(){
            $.ajax({
                type: "POST",
                url: url,                
                dataType: "json",
                success: function (response) {
                    ajustardatostabla(response.data);
                   // console.log(response);
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
    console.log("datos"+datos);
    for (const objetoindividual of datos) {
    //    tablaresultado.innerHTML += `
    //         <tr class="table-primary">
    //                             <td scope="row">${objetoindividual.id}</td>
    //                             <td>${objetoindividual.nombre}</td>
    //                             <td>${objetoindividual.descripcion}</td>
    //                             <td>${objetoindividual.tiempo}</td>
    //                             <td>${objetoindividual.usuario}</td>
    //                             <td>
    //                                 <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.nombre}','${objetoindividual.descripcion}','${objetoindividual.tiempo}')">Editar</a>
    //                                 ||
    //                                 <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
    //                             </td>                              
    //         </tr>
    //    `;
    }   
}

function crearCurso(){

//1.obtener los valores del input por medio de funciones de jquery, ya no se usa el documentgetelementid
//2.Crear un objeto donde se puedan agregar estos valores
//3.

// objeto = {
//     nombre,
//     descripcion
// }

    $.ajax({
        type: "method",
        url: "url",
        data: objeto,
        dataType: "dataType",
        success: function (response) {
            
        }
    });    
}


       
    </script>

</head>

<body>
  <header>
    <!-- place navbar here -->
  </header>
  <main>

  </main>
  <footer>
    <!-- place footer here -->
  </footer>
  <!-- Bootstrap JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
    integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
  </script>
</body>

</html>