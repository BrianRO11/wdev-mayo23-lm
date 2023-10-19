import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//se necesita el client http
import { HttpClientModule } from '@angular/common/http';
import { GrupoComponent } from './grupo/grupo.component';


@NgModule({
  declarations: [
    AppComponent,
    GrupoComponent,
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
