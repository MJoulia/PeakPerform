// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskData,  } from './task/interface';

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
  gettaskdata(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/alltask`, {
      params: { id: id.toString() }
    });
  }
  
  
  addtask(taskdata: TaskData): Observable<any> {
    return this.http.post(`${this.baseUrl}/addtask`, taskdata);
  }
}
