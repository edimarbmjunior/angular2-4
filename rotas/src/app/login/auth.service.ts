import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../Entity/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  private usuarioLogado:any;
  mostrarMenuEmmitter = new EventEmitter<Boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    //console.log('Usuario:', usuario);

    if(usuario.nome === 'usuario@gmail.com'
      && usuario.senha === '123456'){
        this.usuarioAutenticado = true;
        this.mostrarMenuEmmitter.emit(true);
        this.usuarioLogado = usuario;
        this.router.navigate(['/']);
      }else{
        this.mostrarMenuEmmitter.emit(false);
        this.usuarioAutenticado = false;
      }
  }

  fazerLogout(){

    if(this.usuarioAutenticado){
        this.usuarioAutenticado = false;
        this.mostrarMenuEmmitter.emit(false);
        this.router.navigate(['/login']);
      }else{
        this.mostrarMenuEmmitter.emit(false);
        this.router.navigate(['/login']);
      }
  }

  retornaUsuarioAutenticado():boolean{
    return this.usuarioAutenticado;
  }

  retornaUsuarioLogado():[]{
    return this.usuarioLogado;
  }
}
