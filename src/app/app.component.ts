import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Inicio', url: '/folder', icon: 'home' },
    {title: 'Mis viajes', url: '/viajes', icon: 'home' },
    {title: 'Perfil', url: '/perfil', icon: 'home' },
    {title: 'Metodo de pago', url: '/metodo', icon: 'home' },
  ]
  constructor() {}
}
