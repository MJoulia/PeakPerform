import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-archive',
  imports: [FormsModule, CommonModule, NavbarComponent, RouterModule],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css'
})
export class ArchiveComponent {

  constructor( private router: Router, private apiService: ApiService) { }


  
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
  removeFromArchive(project_id:number){
    this.apiService.removeProjectFromArchive(project_id).subscribe(
      (response) => {
        console.log('Project added successfully!', response);
        window.location.reload();

      },
      (error) => {
        console.error('Error adding project', error);
      }
    );
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
    this.apiService.getProjectsFromArchive().subscribe(
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