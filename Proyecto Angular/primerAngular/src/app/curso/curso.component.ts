import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CursoResponse } from './models/curso-response';
import { Curso } from './models/curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit{
  title = 'Primer Angular';

  pestanaActiva: string = 'pestana1';
  cambiarPestana(pestana: string){
    this.pestanaActiva = pestana;
  }

  ArregloDatos: Curso [] = [];

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php";

    this.http.get<CursoResponse>(url).subscribe(
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
