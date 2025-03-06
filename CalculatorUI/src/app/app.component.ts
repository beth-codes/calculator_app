
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppService } from './services/app.services';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  start: number = 0;
  amount: number = 0;
  result: number | undefined;
  errorMessage: string = '';
  isAdditionModalOpen: boolean = false; 
  isSubtractionModalOpen: boolean = false;
  currentTheme: string = 'light-theme'; // Default theme

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    console.log(this.currentTheme);
  }

  // Open Addition Modal
  openAdditionModal() {
    this.isAdditionModalOpen = true;
    this.resetForm();
  }

  // Close Addition Modal
  closeAdditionModal() {
    this.isAdditionModalOpen = false;
    this.resetForm();
  }

  // Open Subtraction Modal
  openSubtractionModal() {
    this.isSubtractionModalOpen = true;
    this.resetForm();
  }

  // Close Subtraction Modal
  closeSubtractionModal() {
    this.isSubtractionModalOpen = false;
    this.resetForm();
  }

  // Validate Input
  validateInput(field: 'start' | 'amount') {
    const value = field === 'start' ? this.start : this.amount;
    if (isNaN(Number(value))) {
      this.errorMessage = 'Please enter a valid number.';
    } else {
      this.errorMessage = '';
    }
  }

  // Perform Addition
  onAdd() {
    if (this.errorMessage) return;
    this.result = Number(this.start) + Number(this.amount);
  }

  // Perform Subtraction
  onSubtract() {
    if (this.errorMessage) return;
    this.result = Number(this.start) - Number(this.amount);
  }

  // Reset Form
  resetForm() {
    this.start = 0;
    this.amount = 0;
    this.result = undefined;
    this.errorMessage = '';
  }
}

// export class AppComponent {
//   title = 'my-app';
//   start: number = 0;
//   amount: number = 0;
//   result: number | undefined;
//   // isModalOpen: boolean = false;
//   isAdditionModalOpen: boolean = false; // Controls addition modal visibility
//   isSubtractionModalOpen: boolean = false; // Controls subtraction modal visibility

//   constructor(private appService: AppService) {}


//   // Open Addition Modal
//   openAdditionModal() {
//     this.isAdditionModalOpen = true;
//   }

//   // Close Addition Modal
//   closeAdditionModal() {
//     this.isAdditionModalOpen = false;
//     this.result = undefined; // Reset result when closing
//   }

//   // Open Subtraction Modal
//   openSubtractionModal() {
//     this.isSubtractionModalOpen = true;
//   }

//   // Close Subtraction Modal
//   closeSubtractionModal() {
//     this.isSubtractionModalOpen = false;
//     this.result = undefined; // Reset result when closing
//   }

//   // Perform Addition
//   onAdd() {
//     this.result = this.start + this.amount;
//   }

//   // Perform Subtraction
//   onSubtract() {
//     this.result = this.start - this.amount;
//   }
// }
