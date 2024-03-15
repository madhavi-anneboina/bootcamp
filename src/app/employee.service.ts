import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  mockEmployee = {
    "0": { Name: "User 0", Designation: "SDE", Salary: "$28,000", City: "Mumbai" },
    "1": { Name: "User 1", Designation: "SDE1", Salary: "$45,000", City: "Delhi" },
    "2": { Name: "User 2", Designation: "SDE1", Salary: "$37,000.50", City: "Chennai" },
    "3": { Name: "User 3", Designation: "SDE3", Salary: "$78,000", City: "Chennai" },
    "4": { Name: "User 4", Designation: "SDE", Salary: "$22,000", City: "Mumbai" },
    "5": { Name: "User 5", Designation: "SDE2", Salary: "$35,000", City: "Pune" },
    "6": { Name: "User 6", Designation: "SDE3", Salary: "$67,000", City: "Hyderabad" }
  };
  constructor(private http: HttpClient) { }



  getEmployee() {
    return this.http.get('./assets/data/db.json');
  }
}
