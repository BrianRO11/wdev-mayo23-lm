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
  title = 'primerAngular';

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

}
