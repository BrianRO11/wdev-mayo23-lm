import { Component, OnInit} from '@angular/core';
import {Grupos}from './models/grupos';
import { GruposResponse } from './models/grupos-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})

export class GrupoComponent implements OnInit {
  title = 'primerAngular'

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
}
