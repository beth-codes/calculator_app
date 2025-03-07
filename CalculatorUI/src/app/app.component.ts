import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppService } from './services/app.services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
  currentTheme: string = 'light-theme';

  constructor(private appService: AppService) {}

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
  }

  openAdditionModal() {
    this.isAdditionModalOpen = true;
    this.resetForm();
  }

  closeAdditionModal() {
    this.isAdditionModalOpen = false;
    this.resetForm();
  }

  openSubtractionModal() {
    this.isSubtractionModalOpen = true;
    this.resetForm();
  }

  closeSubtractionModal() {
    this.isSubtractionModalOpen = false;
    this.resetForm();
  }

  validateInput(field: 'start' | 'amount') {
    const value = field === 'start' ? this.start : this.amount;
    if (isNaN(Number(value))) {
      this.errorMessage = 'Please enter a valid number.';
    } else {
      this.errorMessage = '';
    }
  }

  // Perform Addition using the API
  onAdd() {
    if (this.errorMessage) return;

    this.appService.add(this.start, this.amount).subscribe({
      next: (response) => {
        this.result = response.result;
      },
      error: (error) => {
        this.errorMessage = 'An error occurred while performing the addition.';
        console.error(error);
      },
    });
  }

  // Perform Subtraction using the API
  onSubtract() {
    if (this.errorMessage) return;

    this.appService.subtract(this.start, this.amount).subscribe({
      next: (response) => {
        this.result = response.result;
      },
      error: (error) => {
        this.errorMessage = 'An error occurred while performing the subtraction.';
        console.error(error);
      },
    });
  }

  resetForm() {
    this.start = 0;
    this.amount = 0;
    this.result = undefined;
    this.errorMessage = '';
  }
}