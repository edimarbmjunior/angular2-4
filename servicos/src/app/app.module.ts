import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosServices } from './cursos/cursos.service';
import { CriarCursoAppModule } from './criar-curso/criar-curso.module';
import { CursoAppModule } from './cursos/curso.module';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CriarCursoAppModule,
    CursoAppModule
  ],
  //providers: [CursosServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
