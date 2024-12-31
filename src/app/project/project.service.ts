import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: any[] = [];

  constructor() {}

  // Ajouter un projet
  addProject(project: any) {
    this.projects.push(project);
  }

  // Récupérer tous les projets
  getProjects() {
    return this.projects;
  }
}
