import { CursosServices } from '../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers:[CursosServices]
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursoService: CursosServices) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

  onAddSalvar(curso: string){
    this.cursoService.addCurso(curso);
  }

}
