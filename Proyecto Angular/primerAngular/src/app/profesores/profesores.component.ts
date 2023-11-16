import { Component, OnInit } from '@angular/core';
import { Profesor } from './models/profesor';
import { ProfesorResponse } from './models/profesor-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit{
  title = 'Primer Angular';
  textoBoton = "Guardar"
  id = "";
  modeloProf: Profesor = new Profesor ();

  addAndEdit(){
    this.modeloProf.usuario = 'Brian Rivas';

    if (this.modeloProf.id== ""){
      this.enviarSolicitudPost();
    }else{
      this.enviarSolicitudPostEdit();
      this.limpiar();
    }

    
  }

  cargaredicion(item: Profesor){
    this.modeloProf = item;
    console.log(item);
    this.textoBoton = "Modificar";
    this.id = "id: " + this.modeloProf.id;
  }

  eliminar(item: Profesor){
    this.modeloProf = item;
    this.enviarSolicitudPostEliminar();
  }

  limpiar(){
    this.modeloProf = new Profesor();
    this.textoBoton = "Guardar"
    this.id;
  }

  pestanaActiva: string = 'pestana4';
  cambiarPestana(pestana: string){
    this.pestanaActiva = pestana;
  } 

  ArregloDatos: Profesor [] = [];

  constructor (private http: HttpClient) {}
  
  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaProfesores.php";

    this.http.get<ProfesorResponse>(url).subscribe(
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
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/BorrarProfesores.php';
    
    // Datos que deseas enviar en la solicitud POST
    const data = {
      id: this.modeloProf.id,
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
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/ActualizarProfesores.php';
    
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
    this.http.post(url, this.modeloProf, { headers }).subscribe(
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
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/InsertarProfesores.php';
    
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
    this.http.post(url, this.modeloProf, { headers }).subscribe(
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
