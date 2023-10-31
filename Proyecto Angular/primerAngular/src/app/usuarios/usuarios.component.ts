import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './models/usuario';
import { UsuarioResponse } from './models/usuario-response';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{
  title = 'Primer Angular';

  pestanaActiva: string = 'pestana5';
  cambiarPestana(pestana: string){
    this.pestanaActiva = pestana;
  }

  ArregloDatos: Usuario [] = [];

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaUsuarios.php";

    this.http.get<UsuarioResponse>(url).subscribe(
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
