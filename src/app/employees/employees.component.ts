import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  employeee:any;
  constructor(private http: HttpClient) {

  }
 ngOnInit(): void {
 this.http.get("http://localhost:3000/employees").subscribe(
  (data) => {
    this.employeee = data
    console.log(this.employeee)
  }

  )
 
 }
}
