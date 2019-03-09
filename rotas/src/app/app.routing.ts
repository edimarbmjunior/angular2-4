import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '../../node_modules/@angular/compiler/src/core';

import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: ''      , component: HomeComponent },
    { path: 'login' , component: LoginComponent },
    { path: 'cursos', component: CursosComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);