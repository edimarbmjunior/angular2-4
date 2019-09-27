import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AlunosGuard implements CanActivateChild {

  private usuario:String = 'usuario';

  constructor(private authService: AuthService) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean>|Promise<boolean>|boolean {
    /* console.log('canActivateChild-Alunos');
    console.log('route-Alunos:', route);
    console.log('state-Alunos:', state); */
    /* if(state.url.includes('edit')
      && this.authService.retornaUsuarioAutenticado()){
      alert('Não é possível editar!');
      console.log('url-Alunos:', state.url);
      console.log('Usuario:', this.authService.retornaUsuarioLogado());
      return false;
    } */
    return true;
  }
}
