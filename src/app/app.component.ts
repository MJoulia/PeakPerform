import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/*
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PeakPerform';
}*/

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onLogin() {
    // Logic for login action
    console.log('Login button clicked');
  }
}

