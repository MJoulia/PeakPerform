import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ProjetComponent } from './projet/projet.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },   // Default route
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'createaccount', component: CreateaccountComponent},
  { path: 'projet', component: ProjetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
