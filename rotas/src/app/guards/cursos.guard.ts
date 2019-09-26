import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class CursosGuard implements CanActivateChild {

  private usuario:String = 'usuario';

  constructor() { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean>|Promise<boolean>|boolean {
      console.log('canActivateChild');
    return true;
  }
}
