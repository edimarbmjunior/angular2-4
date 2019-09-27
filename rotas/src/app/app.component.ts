import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rotas';

  mostrarMenu:Boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router
    ){}

  ngOnInit(){
    this.authService.mostrarMenuEmmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  ngOnChanges(){
    this.authService.mostrarMenuEmmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  sair(){
    //console.log('App.Component-Sair');
    this.authService.fazerLogout();
  }
}
