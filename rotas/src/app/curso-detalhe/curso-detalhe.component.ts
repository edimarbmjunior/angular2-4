import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string;
  inscricao: Subscription;

  constructor(private routeId: ActivatedRoute) {
    // console.log('Route: ', this.routeId);
    // this.id = this.routeId.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.routeId.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe;
  }

}
