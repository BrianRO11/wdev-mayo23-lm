import { Component, OnInit } from '@angular/core';
import { Estudiantes } from './models/estudiantes';
import { EstudianteResponse } from './models/estudiante-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})

export class EstudianteComponent implements OnInit {
  title = 'Primer Angular';
  textoBoton = "Guardar"
  id= "";

  modeloEst: Estudiantes = new Estudiantes ();

  addAndEdit(){
    this.modeloEst.usuario = 'Brian Rivas'

    if (this.modeloEst.id== ""){
      this.enviarSolicitudPost();
    }else{
      this.enviarSolicitudPostEdit();
      this.limpiar();
    }

    
  }

  cargaredicion(item: Estudiantes){
    this.modeloEst = item;
    console.log(item);
    this.textoBoton = "Modificar";
    this.id = "id: " + this.modeloEst.id;
  }

  eliminar(item: Estudiantes){
    this.modeloEst = item;
    this.enviarSolicitudPostEliminar();
  }

  limpiar(){
    this.modeloEst = new Estudiantes
    this.textoBoton = "Guardar";
  }

  pestanaActiva: string = 'pestana3';
  cambiarPestana(pestana: string){
    this.pestanaActiva = pestana;
  } 

  ArregloDatos: Estudiantes [] = [];

  constructor (private http: HttpClient) {}
  
  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php";

    this.http.get<EstudianteResponse>(url).subscribe(
      (response) => {
      this.ArregloDatos = response.data;
      console.log(response.data);
    },
    (error) =>{
      console.error("Error en la carga de datos", error)
    }
    )
  }

  enviarSolicitudPostEliminar(){
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php';
    
    // Datos que deseas enviar en la solicitud POST
    const data = {
      id: this.modeloEst.id,

      // Agrega más datos según tus necesidades
    };

    // Configura las cabeceras para la solicitud POST
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Ajusta el tipo de contenido según el requerimiento de la API
    });

    // Realiza la solicitud POST
    this.http.post(url, data, { headers }).subscribe(
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


  enviarSolicitudPostEdit(){
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php';
    
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
    this.http.post(url, this.modeloEst, { headers }).subscribe(
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
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php';
    
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
    this.http.post(url, this.modeloEst, { headers }).subscribe(
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
