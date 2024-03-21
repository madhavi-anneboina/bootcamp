// employeetable.component.ts

import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.css'],
})
export class EmployeetableComponent {
  employees: any[];
  employeeTotalSalary = 0;
  salaryByDesignation = [] as any;
  countByDesignation = [] as any;

  constructor(private employeeService: EmployeeService) {
    this.employees = Object.values(this.employeeService.mockEmployee);
    this.getTotalSalary();
    const designations = this.getUniqueDesignations();
    this.getEmployeeCountByDesignation(designations);
    this.getTotalSalaryByDesignation(designations);
  }

  getTotalSalary(): void {
    //let total = 0;
    this.employeeTotalSalary = 0;
    for (const employee of this.employees) {
      this.employeeTotalSalary += parseFloat(
        employee.Salary.replace('$', '').replace(',', '')
      );
    }
  }

  getEmployeeCountByDesignation(designations: string[]): void {
    this.countByDesignation = [];

    designations.forEach((designation) => {
      const filterDesignation = this.employees.filter(
        (employee) => employee.Designation === designation
      ).length;

      this.countByDesignation.push({
        name: designation,
        count: filterDesignation,
      });
    });
  }

  getTotalSalaryByDesignation(designations: string[]): void {
    this.salaryByDesignation = [];
    designations.forEach((designation) => {
      const filterDesignation = this.employees.filter(
        (employee) => employee.Designation === designation
      ).reduce((prev, cur)=>  prev += parseFloat(cur.Salary.replace('$', '').replace(',', '')), 0);

      this.salaryByDesignation.push({
        name: designation,
        salary: filterDesignation,
      });
    });
  }

  private getUniqueDesignations(): string[] {
    const designations = this.employees.map((employee) => employee.Designation);
    const uniQueDes = {} as Record<string, boolean>;
    for (let designation of designations) {
      uniQueDes[designation] = true;
    }
    return Object.keys(uniQueDes);
  }
}
