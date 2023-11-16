import { Component, OnInit} from '@angular/core';
import {Grupos}from './models/grupos';
import { GruposResponse } from './models/grupos-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from '../curso/models/curso';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})

export class GrupoComponent implements OnInit {
  title = 'Primer Angular'
  textoBoton = "Guardar";
  id = "";

  modeloGrupo: Grupos = new Grupos ();

  addAndEdit(){
    // this.modeloGrupo.usuario= 'Brian Rivas'

    if (this.modeloGrupo.id == ""){
      this.enviarSolicitudPost();
    }else{
      this.enviarSolicitudPostEdit
      this.limpiar();
    }

  }

  cargaredicion(item: Grupos){
    this.modeloGrupo = item;
    console.log(item);
    this.textoBoton = "Modificar";
    this.id = "id: " + this.modeloGrupo.id;
  }

  eliminar (item: Grupos){
    this.modeloGrupo = item;
    this.enviarSolicitudPostEliminar();
  }

  limpiar(){
    this.modeloGrupo = new Grupos();
    this.textoBoton = "Guardar";
    this.id = "" ;
  }

  pestanaActiva: string = 'pestana2';
  cambiarPestana(pestana: string){
    this.pestanaActiva = pestana;
  } 

  ArregloDatos: Grupos [] = [];
  
  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php"

    this.http.get<GruposResponse>(url).subscribe(
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
    const url = "https://paginas-web-cr.com/ApiPHP/apis/BorrarGrupo.php";
    
    // Datos que deseas enviar en la solicitud POST
    const data = {
      id: this.modeloGrupo.id,
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
    const url = "https://paginas-web-cr.com/ApiPHP/apis/ActualizarGrupo.php";
    
    // Datos que deseas enviar en la solicitud POST
    const data = {
      id: 'valor1',
      nombre: 'valor2'
      // Agrega más datos según tus necesidades
    };

    // Configura las cabeceras para la solicitud POST
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Ajusta el tipo de contenido según el requerimiento de la API
    });

    // Realiza la solicitud POST
    this.http.post(url, this.modeloGrupo, { headers }).subscribe(
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
    const url = "https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php";
    
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
    this.http.post(url, this.modeloGrupo, { headers }).subscribe(
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
