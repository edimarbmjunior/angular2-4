import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guards';
import { CursosGuard } from './guards/cursos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
    //usando lazy loading para a rota de cursos
    { path: 'cursos',
      loadChildren: './cursos/cursos.module#CursosModule',
      canActivate: [AuthGuard],
      canActivateChild: [CursosGuard],
      canLoad: [AuthGuard]
    },
    //usando lazy loading para a rota de alunos
    //{ path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule'},
    { path: 'login' , component: LoginComponent },
    { path: 'home'  , component: HomeComponent, canActivate:[AuthGuard] },
    { path: ''      , redirectTo: '/home', pathMatch: 'full' },
    { path: '**'    , component: PaginaNaoEncontradaComponent, canActivate:[AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
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
