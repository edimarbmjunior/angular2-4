import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AuthGuard } from '../guards/auth.guards';

const alunosRoutes: Routes = [
  //Pode apagar para poder utilizar o lazy loading no path de alunos
    { path: 'alunos'      , component: AlunosComponent, children:[
        { path: 'novo' , component: AlunoFormComponent },
        { path: ':id'  , component: AlunoDetalheComponent },
        { path: ':id/edit' , component: AlunoFormComponent }
      ],
      canActivate:[AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(alunosRoutes)],
    exports:[RouterModule]
})

export class AlunosRoutingModule {}
