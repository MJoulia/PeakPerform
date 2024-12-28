import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  title = 'PeakPerform';
  items: any[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getItems().subscribe(
      (data) => {
        this.items = data;
        console.log(this.items)
      },
      (error) => {
        console.error('Erreur lors de la récupération des items :', error);
      }
    );
  }

}
