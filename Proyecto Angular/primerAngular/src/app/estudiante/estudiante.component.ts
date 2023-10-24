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
  title = 'primerAngular';

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

}
