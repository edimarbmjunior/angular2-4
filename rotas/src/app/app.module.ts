import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { AlunosModule } from './alunos/alunos.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guards';
import { CursosGuard } from './guards/cursos.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //CursosModule, - Retirado pois está sendo usado "lazy Loading" no path de cursos
    AlunosModule, //Pode retirar para está sendo usado "lazy Loading" no path de alunos
    AppRoutingModule
  ],
  providers: [/* CursosService */
    AuthService,
    AuthGuard,
    CursosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
