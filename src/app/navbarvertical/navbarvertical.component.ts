import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-navbarvertical',
  templateUrl: './navbarvertical.component.html',
  imports: [ CommonModule],
  styleUrls: ['./navbarvertical.component.css']
})
export class NavbarverticalComponent implements OnInit {
  items: any[] = [];  // ✅ Stocke les tableaux de projets

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getprojectsimdata().subscribe(
      (data) => {
        this.items = data;
        console.log('Projects:', this.items);  // ✅ Vérifiez les données dans la console
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }
}
