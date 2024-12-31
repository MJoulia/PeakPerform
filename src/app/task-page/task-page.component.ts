
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { Component, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';
import Chart from 'chart.js/auto'; // Import de Chart.js

@Component({
  selector: 'app-task-page',
  imports: [MatButtonToggleModule, MatSliderModule],
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements AfterViewInit {


 update_chart_value(newValue: number, num :number): void {
    
    var value = newValue / 10
    if (this.radarChart) {
      this.radarChart.data.datasets[0].data[num] = value;
      this.radarChart.update();
    }

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
    const ctx = this.radarChartCanvas.nativeElement.getContext('2d'); // Obtenez le contexte 2D
    if (ctx) { // Vérifiez que le contexte n'est pas null
      this.radarChart = new Chart(ctx, {
        type: 'radar', // Type du graphique
        data: {
          labels: ['Employee Qualifications', 'Working Environment', 'Lead Time', ' Quality Management', 'Independance from Suppliers', 'Economic Situation', 'Capacity', ' Equity Capital'],
          datasets: [{
            label: 'Effects',
            data: [0, 9, 3, 10, 3, 9, 3, 8], // Données du graphique
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
          },{
          label: 'Effects',
            data: [5, 0, 10, 1, 4, 6, 3, 8], // Données du graphique
            backgroundColor: 'rgba(235, 54, 54, 0.2)',
            borderColor: 'rgb(235, 54, 54)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
          }
        ]
        },
        options: {
          responsive: true, // pour l animation du graphe 
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
}
