import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from 'src/app/guards/interfaceForm-canDeactivate';

/* @Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno: any;
  inscricao: Subscription;
  private formMudou:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunoService.getAluno(id);
        if(this.aluno === null){
          this.aluno = {};
        }
      }
    );
  }

  onInput(){
    this.formMudou = true;
    //console.log('aluno:', this.aluno);
  }

  verificaPermissaoMudarRota():boolean{
    return this.formMudou;
  }
} */
@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any;
  inscricao: Subscription;
  private formMudou:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunoService.getAluno(id);
        if(this.aluno === null){
          this.aluno = {};
        }
      }
    );
  }

  onInput(){
    this.formMudou = true;
    //console.log('aluno:', this.aluno);
  }

  verificaPermissaoMudarRota():boolean{
    return this.formMudou;
  }

  podeDesativar(){
    return this.verificaPermissaoMudarRota();
  }
}
