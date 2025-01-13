import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-entrep-situation',
  imports: [NavbarComponent],
  templateUrl: './entrep-situation.component.html',
  styleUrl: './entrep-situation.component.css'
})
export class EntrepSituationComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.loadBarChart();
    this.loadLinearChart();
    this.loadPieChart();
  }

  // Bar Chart
  loadBarChart(): void {
    new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'A (€)',
            data: [12000, 15000, 18000, 20000, 25000, 30000],
            backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color of revenue bars
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'B (€)',
            data: [8000, 9000, 11000, 13000, 14000, 16000],
            backgroundColor: 'rgba(255, 99, 132, 0.6)', // Color of expenses bars
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  // Linear Chart
  loadLinearChart(): void {
    new Chart('myLinearChart', {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Revenue (€)',
            data: [12000, 15000, 18000, 20000, 25000, 30000],
            backgroundColor: '#E63946', // Red
            borderColor: '#E63946',
            borderWidth: 2,
            fill: false
          },
          {
            label: 'Expenses (€)',
            data: [8000, 9000, 11000, 13000, 14000, 16000],
            backgroundColor: '#F4A261', // Orange
            borderColor: '#F4A261',
            borderWidth: 2,
            fill: false
          },
          {
            label: 'Profit (€)',
            data: [4000, 6000, 7000, 7000, 11000, 14000],
            backgroundColor: '#264653', // Blue
            borderColor: '#264653',
            borderWidth: 2,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Months'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Amount (€)'
            }
          }
        }
      }
    });
  }

  // Pie Chart
  loadPieChart(): void {
    new Chart('myPieChart', {
      type: 'pie',
      data: {
        labels: ['Very strong constraint on future development', 'Moderate constraint', 'No constraint, sustainable level of debt', 'Does not know'],
        datasets: [
          {
            label: 'Company Situation',
            data: [20000, 60000,100000, 10000],
            backgroundColor: [
              'rgba(54, 162, 235, 0.6)', // Blue
              'rgba(255, 99, 132, 0.6)', // Red
              'rgba(75, 192, 192, 0.6)',
              'rgba(186, 192, 75, 0.6)'// Green
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(186, 192, 75, 0.6)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });
  }
}
