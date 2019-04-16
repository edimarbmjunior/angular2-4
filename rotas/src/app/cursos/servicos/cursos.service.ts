import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'Java'},
      {id: 3, nome: 'C#'},
      {id: 4, nome: 'React'},
      {id: 5, nome: 'Python'},
      {id: 6, nome: 'I.A'}
    ];
  }

  getCurso(id: number){
    let cursos = this.getCursos();
    for(let i = 0; i< cursos.length; i++){
      let curso = cursos[i];
      if(curso.id == id){
        return curso;
      }
    }
    return null;
  }
}
