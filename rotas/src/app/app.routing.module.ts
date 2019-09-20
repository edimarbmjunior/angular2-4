import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    //usando lazy loading para a rota de cursos
    { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule'},
    //usando lazy loading para a rota de alunos
    //{ path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule'},
    { path: 'login' , component: LoginComponent },
    { path: ''      , component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

/* @NgModule({
    imports: [RouterModule.forRoot([
        { path: ''      , component: HomeComponent },
        { path: 'login' , component: LoginComponent },
        { path: 'curso/:id', component: CursoDetalheComponent },
        { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
        { path: 'cursos', component: CursosComponent }
    ])],
    exports:[RouterModule]
}) */

export class AppRoutingModule {}
