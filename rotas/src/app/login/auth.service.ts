import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../Entity/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmmitter = new EventEmitter<Boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if(usuario.nome === 'usuario@gmail.com'
      && usuario.senha === '123456'){
        this.usuarioAutenticado = true;
        this.mostrarMenuEmmitter.emit(true);
        this.router.navigate(['/']);
      }else{
        this.mostrarMenuEmmitter.emit(false);
        this.usuarioAutenticado = false;
      }
  }
}
