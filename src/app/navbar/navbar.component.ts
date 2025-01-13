import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // Nom de l’utilisateur (à récupérer depuis un service, un store, ou passé en @Input, etc.)
  userName: string = 'User Name';

  // Méthode de déconnexion
  logout(): void {
    // Placez ici la logique de déconnexion :
    // - Appeler un service d’authentification,
    // - Rediriger vers la page de login,
    // - Effacer les tokens, etc.
    alert('Logging out...');
    // Redirect to logout page or perform logout logic here
    console.log('Déconnexion en cours…');
  }

  menuActive = false;

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
  }
}
