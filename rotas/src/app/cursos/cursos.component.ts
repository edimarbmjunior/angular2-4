import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Subscription } from '../../../node_modules/rxjs';

import { CursosService } from '../cursos/servicos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private cursoService: CursosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
    // this.pagina++;
    this.router.navigate(['/cursos'],
      {
        queryParams:{'pagina':++this.pagina}
      }
    );
  }
}
