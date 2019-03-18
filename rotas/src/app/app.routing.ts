import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '../../node_modules/@angular/compiler/src/core';

import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const APP_ROUTES: Routes = [
    { path: ''      , component: HomeComponent },
    { path: 'login' , component: LoginComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: 'cursos', component: CursosComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);