// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/alldata`);
  }
}
