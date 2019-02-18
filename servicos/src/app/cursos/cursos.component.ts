import { Component, OnInit } from '@angular/core';

import { CursosServices } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers:[CursosServices]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  // cursoService: CursosServices;

  // constructor() {
  //   this.cursoService = new CursosServices();
  // }

  // constructor(_cursoService: CursosServices) {
  //   this.cursoService = _cursoService;
  // }

  constructor(private cursoService: CursosServices) {
  }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();

    // this.cursoService.emitirCursoCriado.subscribe(
    //   curso => console.log(curso)
    //   // function(curso){
    //   //   console.log(curso);
    //   // };
    // );

    CursosServices.criouNovoCurso.subscribe(
      // curso => console.log(curso)
      curso => this.cursos.push(curso)
      // function(curso){
      //   console.log(curso);
      // };
    );
  }
}
