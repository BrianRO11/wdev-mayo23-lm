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
  textoBoton = "Guardar";

  selectedCursos: Curso = new Curso ();
  selectedCurso: Curso = {
    id: '',
    nombre: '',
    descripcion: '',
    tiempo: '', 
    usuario: '',
  }

  modeloCurso: Curso = new Curso ();

  addAndEdit(){
    this.modeloCurso.usuario= 'Brian Rivas'

    if (this.modeloCurso.id == ""){
      this.enviarSolicitudPost();
    }else{
      this.enviarSolicitudPostEdit();
      this.limpiar();
    }
      
  }

  cargaredicion(item: Curso){
    this.modeloCurso = item;
    console.log(item);
    this.textoBoton = "Modificar";
  }

  limpiar(){
    this.modeloCurso = new Curso();
    this.textoBoton = "Guardar";
  }

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

  

  enviarSolicitudPostEdit(){
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php';
    
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
    this.http.post(url, this.modeloCurso, { headers }).subscribe(
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
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php';
    
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
    this.http.post(url, this.modeloCurso, { headers }).subscribe(
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
