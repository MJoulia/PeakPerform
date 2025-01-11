// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskData, update_effects } from './interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/alldata`);
  }
  getprojectsimdata(): Observable<any> {
    return this.http.get(`${this.baseUrl}/projectsimdata`);
  }
  addProject(projectData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/project`, projectData);
  }
  getTasksData(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/alltask`, {
      params: { id: id.toString() }
    });
  }
  getTaskData(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/taskinfo`, {
      params: { task_id: id.toString() }
    });
  }
  updateEffectsOfTast(effects: update_effects): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateeffects`, effects);
  }
  addtask(taskdata: TaskData): Observable<any> {
    return this.http.post(`${this.baseUrl}/addtask`, taskdata);
  }
  getProjectsFromArchive(): Observable<any> {
    return this.http.get(`${this.baseUrl}/archive`);
  }
  addProjecttoArchive(id: number): Observable<any> {
    const body = { project_id: id };
    return this.http.put(`${this.baseUrl}/add-project-to-archive`, body);
  }
  removeProjectFromArchive(id: number): Observable<any> {
    const body = { project_id: id };
    return this.http.put(`${this.baseUrl}/remove-project-to-archive`, body);
  }
  getSubTaskData(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/subtask`, {
      params: { task_id: id.toString() }
    });
  }
}
