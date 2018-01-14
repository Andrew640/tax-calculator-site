import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: '../calculator/calculator.component.html',
  styleUrls: ['../calculator/calculator.component.scss']
})
export class CalculatorComponent {

  constructor(public fb: FormBuilder) {}

  incomeTax = 0;
  takeHome = 0;
  taxableIncome: number;
  band3Tax;
  band4Tax;

  public calculator = this.fb.group({
    salary: [],
  });

  calculate(salary: number) {
    if (salary == null || salary < 0) {
      this.takeHome = 0;
      this.incomeTax = 0;
    }
    if (salary && salary <= 11500 && salary > 0) {
      this.takeHome = salary;
      this.incomeTax = 0;
    }
    if (salary > 11500 && salary <= 45000 ) {
      this.incomeTax = (salary - 11500) * 0.2;
      this.takeHome = salary - this.incomeTax;
    }
    if (salary > 45000 && salary <= 150000) {
      this.band3Tax = (salary - 45000) * 0.4;
      this.incomeTax = this.band3Tax + 6700;
      this.takeHome = salary - this.incomeTax;
    }
    if (salary > 150000) {
      this.band4Tax = (salary - 150000) * 0.45;
      this.incomeTax = this.band4Tax + 48700;
      this.takeHome = salary - this.incomeTax;
    }
  }

}
