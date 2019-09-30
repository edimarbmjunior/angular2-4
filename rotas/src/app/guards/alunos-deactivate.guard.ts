import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IFormCanDeactivate } from './interfaceForm-canDeactivate';

/* @Injectable({providedIn: 'root'})
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {

  private verificaSairForm:boolean = false;
  canDeactivate(
    alunoFormComponent: AlunoFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

    if(alunoFormComponent.verificaPermissaoMudarRota()){

      if(confirm('Quer realmente sair da página? Você perterá as alterações!')){
        this.verificaSairForm = true;
      }
      if(this.verificaSairForm){
        return true;
      }else{
        return false;
      }
    }else{

      return true;
    }
  }
} */
@Injectable({providedIn: 'root'})
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

  private verificaSairForm:boolean = false;
  canDeactivate(
    alunoFormComponent: IFormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if(alunoFormComponent.podeDesativar()){

      if(confirm('Quer realmente sair da página? Você perterá as alterações!')){
        this.verificaSairForm = true;
      }
      if(this.verificaSairForm){
        return true;
      }else{
        return false;
      }
    }else{

      return true;
    }
  }
}
