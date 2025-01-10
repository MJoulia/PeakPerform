import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { ApiService } from '../api.service';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent, RouterModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})


export class ProjectComponent {
  constructor( private router: Router, private apiService: ApiService) { }

  confirmNavigation(event: Event) {
    event.preventDefault(); // Empêche le lien de naviguer immédiatement
    const confirmed = confirm('Do you want to go to the archive page?');
    if (confirmed) {
      this.router.navigate(['/archive']);
    }
  }

  
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
  saveProject(formData: any) {
    
    this.apiService.addProject(formData).subscribe(
      (response) => {
        console.log('Project added successfully!', response);
        this.closeModal();
        window.location.reload();

      },
      (error) => {
        console.error('Error adding project', error);
      }
    );
  }
  // Gérer l'affichage du tooltip
  onMouseEnter(index: number) {
    this.showTooltip[index] = true;
  }

  onMouseLeave(index: number) {
    this.showTooltip[index] = false;
  }


  items: any[] = [];
  ngOnInit() {
    this.apiService.getprojectsimdata().subscribe(
      (data) => {
        this.items = data;
        console.log(this.items)
      },
      (error) => {
        console.error('Erreur to get the items :', error);
      }
    );
  }


}
