import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class CursosGuard implements CanActivateChild {

  private usuario:String = 'usuario';

  constructor() { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean>|Promise<boolean>|boolean {
    //console.log('canActivateChild-Cursos');
    return true;
  }
}
