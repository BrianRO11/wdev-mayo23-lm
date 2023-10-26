import { Component, OnInit } from '@angular/core';
import {Cursos} from './models/cursos';
import { RespuestaCursos } from './models/respuesta-cursos';
//import Importa librerias o clases
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //Atributos
  title = 'primerAngular';

  pestanaActiva: string = 'pestana1';
  cambiarPestana(pestana: string){
    this.pestanaActiva = pestana;
  }

  // ArregloDatos: Cursos [] = [
  //   {id: "1", nombre: "html5", descripcion: "111", tiempo: "11", usuario: "Brian"},
  //   {id: "2", nombre: "css3", descripcion: "222", tiempo: "22", usuario: "Brian"},
  //   {id: "3", nombre: "js", descripcion: "333", tiempo: "33", usuario: "Brian"},
  //   {id: "4", nombre: "jquery", descripcion: "444", tiempo: "44", usuario: "Brian"},
  //   {id: "5", nombre: "bootstrap", descripcion: "555", tiempo: "55", usuario: "Brian"}
  // ] 

  ArregloDatos: Cursos [] = [];

  constructor (private http: HttpClient) {}
  
  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php";

    this.http.get<RespuestaCursos>(url).subscribe(
      (response) => {
      this.ArregloDatos = response.data;
      console.log(response.data);
    },
    (error) =>{
      console.error("Error en la carga de datos", error)
    }
    )
  }
}


// id: "", nombre: "", descripcion: "", tiempo: "", usuario: ""