
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { Component, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';
import Chart from 'chart.js/auto'; // Import de Chart.js
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { inject } from '@angular/core';
import { SubTask, update_effects } from '../interface';
import { ActivatedRoute } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ChangeDetectionStrategy, model} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from "../navbar/navbar.component";
import { NavbarverticalComponent } from '../navbarvertical/navbarvertical.component';



@Component({
  selector: 'app-task-page',
  imports: [
            MatButtonToggleModule,
            MatCardModule, 
            MatIconModule,
            MatButtonModule,
            FormsModule,
            MatInputModule,
            MatSliderModule,
            CommonModule, 
            MatCheckboxModule,
            NavbarComponent,
            NavbarverticalComponent
          ],
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements AfterViewInit {
isChecked: boolean = false; 
newSubTaskName: string = ""
task_id = 0
hide_update_value: boolean = true
route : ActivatedRoute = inject(ActivatedRoute);
selectedQualification: number = 0;
selectedWorkenv: number = 0;
selectedQuality: number = 0;
selectedLeadtime: number = 0;
selectedCapacity: number = 0;
selectedEconomic: number = 0;
selectedIndependance: number = 0;
selectedCapital: number = 0;
subtasks: any[] = []
items: any[] = [];
chart_val: any[] = []
data_val: any[] = []


editSubTask(){}

deleteSubTask(){
  this.apiService.delSubTask(this.task_id).subscribe(
    (response) => { console.log('Deleted', response) },
    (error) => { console.error('Error deleting subtask', error) }
  )
}

addsubTask() {
  // Vérifiez que le nom de la sous-tâche n'est pas vide
  if (this.newSubTaskName && this.newSubTaskName.trim() !== '') {
    const newSubTask: SubTask = {
      subtaskname: this.newSubTaskName,
      task_id: this.task_id,
      subtask_finished: 0
    };

    // Effectuer l'appel à l'API
    this.apiService.addsubtask(newSubTask).subscribe(
      (response) => {
        console.log('Project added successfully!', response);
        window.location.reload();
      },
      (error) => {
        console.error('Error adding project', error);
      }
    );
  } else {
    // Message d'erreur si le champ est vide
    alert('Le nom de la sous-tâche est requis !');
    console.error('Le nom de la sous-tâche est requis.');
  }
}



 update_chart_value(newValue: number, num :number): void {
  switch (num) {
    case 0: this.selectedQualification = newValue; break;
    case 1: this.selectedWorkenv = newValue; break;
    case 2: this.selectedQuality = newValue; break;
    case 3: this.selectedLeadtime = newValue; break;
    case 4: this.selectedCapacity = newValue; break;
    case 5: this.selectedEconomic = newValue; break; 
    case 6: this.selectedIndependance = newValue; break;
    case 7: this.selectedCapital = newValue; break;
    }
    var value = newValue
    if (this.radarChart) {
      this.radarChart.data.datasets[0].data[num] = value;
      this.radarChart.update();
      this.hide_update_value = false
    }

  }


  updateTask() {
    const effects:update_effects = {
      qualification: this.data_val[0],
      workenv: this.data_val[1],
      quality: this.data_val[2],
      leadtime: this.data_val[3],
      capacity: this.data_val[4],
      economic: this.data_val[5],
      independance: this.data_val[6],
      capital: this.data_val[7],
      task_id: this.task_id
    }
    console.log(effects)
    this.apiService.updateEffectsOfTast(effects).subscribe({
      next: (response) => {
        console.log('Task updated successfully:', response);
      },
      error: (err) => {
        console.error('Error updating task:', err);
      },
    });
    this.hide_update_value = true
  }


  cancel(){
    this.selectedQualification = [...this.chart_val][0]
    this.selectedWorkenv =  [...this.chart_val][1]
    this.selectedQuality =  [...this.chart_val][2]
    this.selectedLeadtime = [...this.chart_val][3]
    this.selectedCapacity = [...this.chart_val][4]
    this.selectedEconomic = [...this.chart_val][5]
    this.selectedIndependance =  [...this.chart_val][6]
    this.selectedCapital = [...this.chart_val][7]
    this.radarChart.data.datasets[0].data = [...this.chart_val]
    this.radarChart.update();
    this.hide_update_value = true
    console.log(this.chart_val)
  
  }


  formatLabel(value: number): string {
  
    if (value >= 1000) {
      return `${Math.round(value / 1000)}`;

    }

    return `${value}`;
  }

  @ViewChild('radarChartCanvas') radarChartCanvas!: ElementRef<HTMLCanvasElement>; // Référence au canvas
  @ViewChild('doughnutChart') doughnutChartRef!: ElementRef<HTMLCanvasElement>;

  radarChart!: Chart; // Variable pour stocker l'instance du graphique

  createDoughnutChart(): void {
    const ctx = this.doughnutChartRef.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut', // Type of chart
        data: {
          labels: ['Red', 'Blue', 'Yellow'], // Replace with your labels
          datasets: [
            {
              label: 'Dataset',
              data: [100, 50, 25], // Replace with your data
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              
              hoverOffset:4
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top' // Position of legend
            },
            tooltip: {
              enabled: true
            }
          }
        }
      });
    } else {
      console.error('Failed to get context for Doughnut Chart');
    }
  }

  ngAfterViewInit(): void {
 
  }
  private createRadarChart(values: number[]): void {
    const ctx = this.radarChartCanvas.nativeElement.getContext('2d'); // Obtenez le contexte 2D
    if (ctx) { // Vérifiez que le contexte n'est pas null
      this.radarChart = new Chart(ctx, {
        type: 'radar', // Type du graphique
        data: {
          labels: ['Employee Qualifications', 'Working Environment', 'Lead Time', ' Quality Management', 'Independance from Suppliers', 'Economic Situation', 'Capacity', ' Equity Capital'],
          datasets: [{
            label: 'Effects',
            data: values,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
          }
        ]
        },
        options: {
          responsive: false,
          maintainAspectRatio: false, // pour l animation du graphe 
          plugins: {
            legend: {
              display: false,
              position: 'top',
            }
          },
          scales: {
            r: {
              angleLines: {
                display: true
              },
              suggestedMin: 0,
              suggestedMax: 10,
              ticks: {
                stepSize: 1,
                display: true,
              }
            }
          }
        }
      });
    } else {
      console.error('Le contexte du canvas est null.');
    }

    this.createDoughnutChart();
  }
  
  constructor( private apiService: ApiService) {
    this.task_id = Number(this.route.snapshot.params['taskid'])
   }


  // subtasks = ['Subtask 1', 'Subtask 2', 'Subtask 3'];
  // statuses: boolean[] = [false, false, false];  // false = Not , true = terminé

// Marquer une tâche comme terminée
  markAsDone(index: number) {
    // this.statuses[index] = true;
    // console.log(`Subtask ${index + 1} is marked as done!`);
  }

// Marquer une tâche comme pas encore terminée
  markAsNotDone(index: number) {
  //   this.statuses[index] = false;
  //   console.log(`Subtask ${index + 1} is not done yet!`);
  // 
  }

  ngOnInit() {

    
    this.apiService.getTaskData(this.task_id).subscribe(
      (data) => {
        this.update_data(data)
      },
      (error) => {
        console.error('Erreur to get the items :', error);
      }
   
    );
    this.apiService.getSubTaskData(this.task_id).subscribe(
      (data) => {
        this.updateSubTaskData(data)
      },
      (error) => {
        console.error('Erreur to get the items :', error);
      }
   
    );

 }

 updateSubTaskData(data:any){
  this.subtasks = data
  console.log(this.subtasks)
 }
 update_data(data:any){
  this.items = data;
  this.selectedQualification = this.items[0][4] 
  this.selectedWorkenv =  this.items[0][5] 
  this.selectedQuality =  this.items[0][6]
  this.selectedLeadtime =  this.items[0][7]
  this.selectedCapacity =  this.items[0][8]
  this.selectedEconomic =  this.items[0][9]
  this.selectedIndependance =  this.items[0][10]
  this.selectedCapital =  this.items[0][11]
  this.chart_val.push(this.items[0][4])
  this.chart_val.push(this.items[0][5] )
  this.chart_val.push(this.items[0][6])
  this.chart_val.push( this.items[0][7])
  this.chart_val.push( this.items[0][8])
  this.chart_val.push( this.items[0][9])
  this.chart_val.push(this.items[0][10])
  this.chart_val.push(this.items[0][11])
  this.data_val = [...this.chart_val]
  this.createRadarChart(this.data_val)

 }
}
