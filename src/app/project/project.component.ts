import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { NavbarverticalComponent } from '../navbarvertical/navbarvertical.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent, NavbarverticalComponent],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})


export class ProjectComponent {
  constructor( private router: Router) { }

  confirmNavigation(event: Event) {
    event.preventDefault(); // Empêche le lien de naviguer immédiatement
    const confirmed = confirm('Do you want to go to the archive page?');
    if (confirmed) {
      this.router.navigate(['/archive']);
    }
  }

  // Liste des projets
  projects = [
    {
      id: 1,
      name: 'Employee Handbook',
      description: 'A comprehensive guide for employees.',
      deadline: '2024-12-31',
      dateCreated: new Date().toISOString(),
      colorClass: 'employee-handbook',
    },
    {
      id: 2,
      name: 'Project Reports',
      description: 'Monthly reports on project progress.',
      deadline: '2024-12-25',
      dateCreated: new Date().toISOString(),
      colorClass: 'project-reports',
    },
  ];

  // Gérer les tooltips
  showTooltip: boolean[] = [false, false];


  showModal = false;

  // Ouvrir la modale
  onAddClick() {
    this.showModal = true;
  }

  // Fermer la modale
  closeModal() {
    this.showModal = false;
  }

  // Sauvegarder un projet avec un ID unique et une date de création
  saveProject(data: { name: string; description: string; deadline: string }) {
    if (data.name && data.description && data.deadline) {
      const newProject = {
        id: this.projects.length + 1, // ID généré automatiquement
        name: data.name,
        description: data.description,
        deadline: data.deadline,
        dateCreated: new Date().toISOString(), // Date de création ajoutée automatiquement
        colorClass: 'custom-card', // Classe CSS pour les nouvelles cartes
      };

      // Ajouter le projet à la liste
      this.projects.push(newProject);

      console.log('Projet enregistré :', newProject);

      // Fermer la modale après l'ajout
      this.closeModal();
    } else {
      alert('Veuillez remplir tous les champs !');
    }
  }

  // Gérer l'affichage du tooltip
  onMouseEnter(index: number) {
    this.showTooltip[index] = true;
  }

  onMouseLeave(index: number) {
    this.showTooltip[index] = false;
  }
}
