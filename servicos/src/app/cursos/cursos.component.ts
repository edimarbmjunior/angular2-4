import { Component, OnInit } from '@angular/core';

import { CursosServices } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  maticulas: number[] = [];
  professores: string[] = [];
  cursoService: CursosServices;

  constructor() {
    this.cursoService = new CursosServices();
  }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
    this.maticulas = this.cursoService.getMaticulas();
    this.professores = this.cursoService.getProfessores();
  }
}
