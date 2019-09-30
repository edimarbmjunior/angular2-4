//usado comando de snippets para criação do modulo básico
import { NgModule } from '@angular/core';
import { CommonModule } from '../../../node_modules/@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations:[
      AlunosComponent,
      AlunoFormComponent,
      AlunoDetalheComponent
    ],
    providers:[
      AlunosService,
      AlunosGuard,
      AlunosDeactivateGuard,
      AlunoDetalheResolver
    ]
})
export class AlunosModule { }
