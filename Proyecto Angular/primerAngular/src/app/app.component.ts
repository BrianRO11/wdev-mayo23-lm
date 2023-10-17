import { Component } from '@angular/core';
import {Cursos} from './models/cursos';
//import Importa librerias o clases
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Atributos
  title = 'primerAngular';

  ArregloDatos: Cursos [] = [
    {id: "1", nombre: "html5", descripcion: "111", tiempo: "11", usuario: "Brian"},
    {id: "2", nombre: "css3", descripcion: "222", tiempo: "22", usuario: "Brian"},
    {id: "3", nombre: "js", descripcion: "333", tiempo: "33", usuario: "Brian"},
    {id: "4", nombre: "jquery", descripcion: "444", tiempo: "44", usuario: "Brian"},
    {id: "5", nombre: "bootstrap", descripcion: "555", tiempo: "55", usuario: "Brian"}
  ]


}


// id: "", nombre: "", descripcion: "", tiempo: "", usuario: ""