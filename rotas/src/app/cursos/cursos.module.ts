//usado comando de snippets para criação do modulo básico
import { NgModule } from '@angular/core';
import { CommonModule } from '../../../node_modules/@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from './servicos/cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
    imports: [
        CommonModule,
        CursosRoutingModule
        //RouterModule - Não precisa dessa importação pois o CursosRoutingModule já exporta essa funcionalidade
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [CursosService],
})
export class CursosModule { }
