// employeetable.component.ts

import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.css']
})
export class EmployeetableComponent {
  employees: any[];
  designations: string[];

  constructor(private employeeService: EmployeeService) {
    this.employees = Object.values(this.employeeService.mockEmployee);
    this.designations = this.getUniqueDesignations();
  }

  getTotalSalary(): number {
    let total = 0;
    for (const employee of this.employees) {
      total += parseFloat(employee.Salary.replace('$', '').replace(',', ''));
    }
    return total;
  }

  getEmployeeCountByDesignation(designation: string): number {
    return this.employees.filter(employee => employee.Designation === designation).length;
  }

  getTotalSalaryByDesignation(designation: string): number {
    let total = 0;
    for (const employee of this.employees) {
      if (employee.Designation === designation) {
        total += parseFloat(employee.Salary.replace('$', '').replace(',', ''));
      }
    }
    return total;
  }

  private getUniqueDesignations(): string[] {
    return [...new Set(this.employees.map(employee => employee.Designation))];
  }
}
