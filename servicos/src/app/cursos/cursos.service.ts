import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosServices {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

    constructor(private logService: LogService){
        console.log('Criação da instância "CursosServices"!')
    }

    getCursos(){
        this.logService.consoleLog('Obtendo lista de cursos!');
        return this.cursos;
    }

    addCurso(curso: string){
        this.logService.consoleLog(`Criando um novo curso: ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosServices.criouNovoCurso.emit(curso);
    }
}