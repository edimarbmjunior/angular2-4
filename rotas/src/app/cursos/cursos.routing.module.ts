import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes: Routes = [
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: 'cursos', component: CursosComponent }
];

@NgModule({
    imports: [// utilizar o metodo "RouterModule.forRoot()" pois nesse passo ele já é um filho/galho na arvore
        RouterModule.forChild(cursosRoutes)
    ],
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

export class CursosRoutingModule {}