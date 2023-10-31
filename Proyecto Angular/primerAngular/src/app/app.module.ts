import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//se necesita el client http
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GrupoComponent } from './grupo/grupo.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CursoComponent } from './curso/curso.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    GrupoComponent,
    EstudianteComponent,
    CursoComponent,
    ProfesoresComponent,
    UsuariosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
