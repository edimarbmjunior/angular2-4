import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';
/* import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/servicos/cursos.service';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component'; */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
    /* CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //routing
    CursosModule,
    AppRoutingModule
  ],
  providers: [/* CursosService */],
  bootstrap: [AppComponent]
})
export class AppModule { }
