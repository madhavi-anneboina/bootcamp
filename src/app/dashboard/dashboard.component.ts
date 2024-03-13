import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currentUser: any;

  constructor(private router: Router) {}

  ngOnInit() {
    const currentUserString = localStorage.getItem('currentUser');
    if (currentUserString) {
      this.currentUser = JSON.parse(currentUserString);
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/newlogin']);
  }
}
