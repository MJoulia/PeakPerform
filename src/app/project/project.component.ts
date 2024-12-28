import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project',
  imports: [FormsModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  showModal = false;

  onAddClick() {

    this.showModal = true
  }

  // 6 cartes -> un booléen par carte pour gérer l'affichage du tooltip
  showTooltip: boolean[] = [false, false, false, false, false, false];

  // Méthode pour activer/désactiver le tooltip d'une carte précise
  onMouseEnter(index: number) {
    this.showTooltip[index] = true;
  }

  onMouseLeave(index: number) {
    this.showTooltip[index] = false;
  }
  

   // Ferme la modale
   closeModal() {
    this.showModal = false;
  }

  // Exemple: envoi du formulaire
  saveProject(data: { name: string; description: string; deadline: string }) {
    console.log('Projet enregistré :', data);
    // Ici, vous pourriez appeler un service, une API, etc.
    this.closeModal(); // ferme la modale après enregistrement
  }
}
