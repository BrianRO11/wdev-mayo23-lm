import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './models/usuario';
import { UsuarioResponse } from './models/usuario-response';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{
  title = 'Primer Angular';
  textoBoton = "Guardar";
  id = "";

  modeloUsuarios: Usuario = new Usuario ();

  addAndEdit(){
    
    if (this.modeloUsuarios.id == ""){
      this.enviarSolicitudPost();
    }else{
      this.enviarSolicitudPostEdit();
      this.limpiar();
    }

  }

  cargaredicion(item: Usuario){
    this.modeloUsuarios = item;
    console.log(item);
    this.textoBoton = "Modificar";
    this.id = "id: " + this.modeloUsuarios.id;

  }

  limpiar(){
    this.modeloUsuarios = new Usuario();
    this.textoBoton = "Guardar";
    this.id
  }



  pestanaActiva: string = 'pestana5';
  cambiarPestana(pestana: string){
    this.pestanaActiva = pestana;
  }

  ArregloDatos: Usuario [] = [];

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaUsuarios.php";

    this.http.get<UsuarioResponse>(url).subscribe(
      (response) => {
      this.ArregloDatos = response.data;
      console.log(response.data);
    },
    (error) =>{
      console.error("Error en la carga de datos", error)
    }
    )

  }

  enviarSolicitudPostEdit() {
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/ActualizarUsuarios.php';
    
    // Datos que deseas enviar en la solicitud POST
    const data = {
      name: 'valor1',
      password: 'valor2',
      id: 'valor3'
      // Agrega más datos según tus necesidades
    };

    // Configura las cabeceras para la solicitud POST
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Ajusta el tipo de contenido según el requerimiento de la API
    });

    // Realiza la solicitud POST
    this.http.post(url, this.modeloUsuarios, { headers }).subscribe(
      (response) => {
        // Maneja la respuesta de la API
        console.log('Respuesta de la API:', response);
        this.obtenerDatos();
      },
      (error) => {
        // Maneja los errores de la solicitud
        console.error('Error:', error);
      }
    );
  }


  enviarSolicitudPost() {
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/InsertarUsuarios.php';
    
    // Datos que deseas enviar en la solicitud POST
    const data = {
      parametro1: 'valor1',
      parametro2: 'valor2'
      // Agrega más datos según tus necesidades
    };

    // Configura las cabeceras para la solicitud POST
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Ajusta el tipo de contenido según el requerimiento de la API
    });

    // Realiza la solicitud POST
    this.http.post(url, this.modeloUsuarios, { headers }).subscribe(
      (response) => {
        // Maneja la respuesta de la API
        console.log('Respuesta de la API:', response);
        this.obtenerDatos();
      },
      (error) => {
        // Maneja los errores de la solicitud
        console.error('Error:', error);
      }
    );
  }

}
