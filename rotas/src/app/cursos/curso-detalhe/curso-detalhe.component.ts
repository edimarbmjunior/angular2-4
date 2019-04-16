import { CursosService } from '../servicos/cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private routeId: ActivatedRoute,
    private router: Router,
    private cursoService: CursosService) {
    // console.log('Route: ', this.routeId);
    // this.id = this.routeId.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.routeId.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.curso = this.cursoService.getCurso(this.id);
        if(this.curso == null){
          this.router.navigate(['/naoEncontrado']);
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe;
  }

}
