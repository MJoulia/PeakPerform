import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { ArchiveComponent } from './archive/archive.component';
import { EntrepSituationComponent } from './entrep-situation/entrep-situation.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },   // Default route
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'createaccount', component: CreateaccountComponent},
  { path: 'project', component: ProjectComponent },
  { path: 'task/:id', component: TaskComponent },
  { path: 'taskpage/:taskid', component: TaskPageComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'entrep-situation', component: EntrepSituationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
