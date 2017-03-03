import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul class="menu">
        <li><a href="">à propos</a></li>
        <li><a href="">contact</a></li>
        <li><a routerLink="/login" routerLinkActive="active">Connexion</a></li>
        <li><a href="">Inscription</a></li>
        <li><a routerLink="/index" routerLinkActive="active">Accueil</a></li>			
	</ul>
	<router-outlet></router-outlet>
`
})
export class AppComponent  { }
