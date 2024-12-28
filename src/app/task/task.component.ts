import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

export interface TaskData {
  name: string;
  description: string;
  qualifications: { viewValue: string; value: number }[];
  subtasks: string[];
}

export interface Qualification {
  viewValue: string;
  value: number;
}

export interface Workenv {
  viewValue: string;
  value: number;
}

export interface Quality {
  viewValue: string;
  value: number;
}

export interface LeadTime {
  viewValue: string;
  value: number;
}

export interface Capacity {
  viewValue: string;
  value: number;
}

export interface Economic {
  viewValue: string;
  value: number;
}

export interface Independence {
  viewValue: string;
  value: number;
}

export interface Capital {
  viewValue: string;
  value: number;
}

@Component({
  selector: 'app-task',
  imports: [FormsModule, MatFormFieldModule,MatInputModule,MatSelectModule, MatCardModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})



export class TaskComponent {

  // 6 cartes -> un booléen par carte pour gérer l'affichage du tooltip
  showTooltip: boolean[] = [false, false, false, false, false, false];

  // Méthode pour activer/désactiver le tooltip d'une carte précise
  onMouseEnter(index: number) {
    this.showTooltip[index] = true;
  }

  onMouseLeave(index: number) {
    this.showTooltip[index] = false;
  }
  
  
  // Show/hide dialog
  showDialog = false;

  // Temporary data for the form
  taskName = '';
  taskDescription = '';
  
  // Effects array (eight items), each defaulting to 0%
  qualifications: Qualification[] = [
    { viewValue: '0%', value: 0 },
    { viewValue: '10%', value: 10 },
    { viewValue: '15%', value: 15 },
    { viewValue: '20%', value: 20 },
    { viewValue: '25%', value: 25 },
    { viewValue: '30%', value: 30 },
    { viewValue: '35%', value: 35 },
    { viewValue: '40%', value: 40 },
    { viewValue: '45%', value: 45 },
    { viewValue: '50%', value: 50 },
    { viewValue: '55%', value: 55 },
    { viewValue: '60%', value: 60 },
    { viewValue: '65%', value: 65 },
    { viewValue: '70%', value: 70 },
    { viewValue: '75%', value: 75 },
    { viewValue: '80%', value: 80 },
    { viewValue: '85%', value: 85 },
    { viewValue: '90%', value: 90 },
    { viewValue: '95%', value: 95 },
    { viewValue: '100%', value: 100 },
  ];

  working_environment: Workenv[] = [
    { viewValue: '0%', value: 0 },
    { viewValue: '10%', value: 10 },
    { viewValue: '15%', value: 15 },
    { viewValue: '20%', value: 20 },
    { viewValue: '25%', value: 25 },
    { viewValue: '30%', value: 30 },
    { viewValue: '35%', value: 35 },
    { viewValue: '40%', value: 40 },
    { viewValue: '45%', value: 45 },
    { viewValue: '50%', value: 50 },
    { viewValue: '55%', value: 55 },
    { viewValue: '60%', value: 60 },
    { viewValue: '65%', value: 65 },
    { viewValue: '70%', value: 70 },
    { viewValue: '75%', value: 75 },
    { viewValue: '80%', value: 80 },
    { viewValue: '85%', value: 85 },
    { viewValue: '90%', value: 90 },
    { viewValue: '95%', value: 95 },
    { viewValue: '100%', value: 100 },
  ];

  qualities: Quality[] = [
    { viewValue: '0%', value: 0 },
    { viewValue: '10%', value: 10 },
    { viewValue: '15%', value: 15 },
    { viewValue: '20%', value: 20 },
    { viewValue: '25%', value: 25 },
    { viewValue: '30%', value: 30 },
    { viewValue: '35%', value: 35 },
    { viewValue: '40%', value: 40 },
    { viewValue: '45%', value: 45 },
    { viewValue: '50%', value: 50 },
    { viewValue: '55%', value: 55 },
    { viewValue: '60%', value: 60 },
    { viewValue: '65%', value: 65 },
    { viewValue: '70%', value: 70 },
    { viewValue: '75%', value: 75 },
    { viewValue: '80%', value: 80 },
    { viewValue: '85%', value: 85 },
    { viewValue: '90%', value: 90 },
    { viewValue: '95%', value: 95 },
    { viewValue: '100%', value: 100 },
  ];

  
  lead_time: LeadTime[] = [
    { viewValue: '0%', value: 0 },
    { viewValue: '10%', value: 10 },
    { viewValue: '15%', value: 15 },
    { viewValue: '20%', value: 20 },
    { viewValue: '25%', value: 25 },
    { viewValue: '30%', value: 30 },
    { viewValue: '35%', value: 35 },
    { viewValue: '40%', value: 40 },
    { viewValue: '45%', value: 45 },
    { viewValue: '50%', value: 50 },
    { viewValue: '55%', value: 55 },
    { viewValue: '60%', value: 60 },
    { viewValue: '65%', value: 65 },
    { viewValue: '70%', value: 70 },
    { viewValue: '75%', value: 75 },
    { viewValue: '80%', value: 80 },
    { viewValue: '85%', value: 85 },
    { viewValue: '90%', value: 90 },
    { viewValue: '95%', value: 95 },
    { viewValue: '100%', value: 100 },
  ];

  capacity: Capacity[] = [
    { viewValue: '0%', value: 0 },
    { viewValue: '10%', value: 10 },
    { viewValue: '15%', value: 15 },
    { viewValue: '20%', value: 20 },
    { viewValue: '25%', value: 25 },
    { viewValue: '30%', value: 30 },
    { viewValue: '35%', value: 35 },
    { viewValue: '40%', value: 40 },
    { viewValue: '45%', value: 45 },
    { viewValue: '50%', value: 50 },
    { viewValue: '55%', value: 55 },
    { viewValue: '60%', value: 60 },
    { viewValue: '65%', value: 65 },
    { viewValue: '70%', value: 70 },
    { viewValue: '75%', value: 75 },
    { viewValue: '80%', value: 80 },
    { viewValue: '85%', value: 85 },
    { viewValue: '90%', value: 90 },
    { viewValue: '95%', value: 95 },
    { viewValue: '100%', value: 100 },
  ];

  economics: Economic[] = [
    { viewValue: '0%', value: 0 },
    { viewValue: '10%', value: 10 },
    { viewValue: '15%', value: 15 },
    { viewValue: '20%', value: 20 },
    { viewValue: '25%', value: 25 },
    { viewValue: '30%', value: 30 },
    { viewValue: '35%', value: 35 },
    { viewValue: '40%', value: 40 },
    { viewValue: '45%', value: 45 },
    { viewValue: '50%', value: 50 },
    { viewValue: '55%', value: 55 },
    { viewValue: '60%', value: 60 },
    { viewValue: '65%', value: 65 },
    { viewValue: '70%', value: 70 },
    { viewValue: '75%', value: 75 },
    { viewValue: '80%', value: 80 },
    { viewValue: '85%', value: 85 },
    { viewValue: '90%', value: 90 },
    { viewValue: '95%', value: 95 },
    { viewValue: '100%', value: 100 },
  ];


  independences: Independence[] = [
    { viewValue: '0%', value: 0 },
    { viewValue: '10%', value: 10 },
    { viewValue: '15%', value: 15 },
    { viewValue: '20%', value: 20 },
    { viewValue: '25%', value: 25 },
    { viewValue: '30%', value: 30 },
    { viewValue: '35%', value: 35 },
    { viewValue: '40%', value: 40 },
    { viewValue: '45%', value: 45 },
    { viewValue: '50%', value: 50 },
    { viewValue: '55%', value: 55 },
    { viewValue: '60%', value: 60 },
    { viewValue: '65%', value: 65 },
    { viewValue: '70%', value: 70 },
    { viewValue: '75%', value: 75 },
    { viewValue: '80%', value: 80 },
    { viewValue: '85%', value: 85 },
    { viewValue: '90%', value: 90 },
    { viewValue: '95%', value: 95 },
    { viewValue: '100%', value: 100 },
  ];

  capital: Capital[] = [
    { viewValue: '0%', value: 0 },
    { viewValue: '10%', value: 10 },
    { viewValue: '15%', value: 15 },
    { viewValue: '20%', value: 20 },
    { viewValue: '25%', value: 25 },
    { viewValue: '30%', value: 30 },
    { viewValue: '35%', value: 35 },
    { viewValue: '40%', value: 40 },
    { viewValue: '45%', value: 45 },
    { viewValue: '50%', value: 50 },
    { viewValue: '55%', value: 55 },
    { viewValue: '60%', value: 60 },
    { viewValue: '65%', value: 65 },
    { viewValue: '70%', value: 70 },
    { viewValue: '75%', value: 75 },
    { viewValue: '80%', value: 80 },
    { viewValue: '85%', value: 85 },
    { viewValue: '90%', value: 90 },
    { viewValue: '95%', value: 95 },
    { viewValue: '100%', value: 100 },
  ];

//  effects: Effect[] = [
  //  { viewValue: 'Employee qualifications', value: 0 },
    //{ label: 'Working environment', value: 0 },
    //{ label: 'Quality management', value: 0 },
    //{ label: 'Lead time', value: 0 },
    //{ label: 'Capacity', value: 0 },
    //{ label: 'Economic situation', value: 0 },
    //{ label: 'Independence from suppliers', value: 0 },
    //{ label: 'Equity capital', value: 0 },
  //];


  // Subtasks
  subtasks: string[] = [];
  newSubtask = ''; // the input field for adding new subtasks

  // Storage for all saved tasks
  savedTasks: TaskData[] = [];

  // Open dialog
  openDialog() {
    this.resetForm();
    this.showDialog = true;
  }

  // Close dialog
  closeDialog() {
    this.showDialog = false;
  }

  // Reset form values
  resetForm() {
    this.taskName = '';
    this.taskDescription = '';
    this.qualifications.forEach(e => e.value = 0);
    this.subtasks = [];
    this.newSubtask = '';
  }

  // Add subtask to the array
  addSubtask() {
    if (this.newSubtask.trim() !== '') {
      this.subtasks.push(this.newSubtask.trim());
      this.newSubtask = '';
    }
  }

  // Save the entire form and close
  saveTask() {
    const newTask: TaskData = {
      name: this.taskName,
      description: this.taskDescription,
      qualifications: this.qualifications.map(e => ({ ...e })), // clone
      subtasks: [...this.subtasks]                 // clone
    };

    // Store in our local savedTasks array
    this.savedTasks.push(newTask);
    console.log('Saved tasks:', this.savedTasks);

    // Close dialog
    this.closeDialog();
  }
}
