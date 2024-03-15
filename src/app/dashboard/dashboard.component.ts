import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currentUser: any;

  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit() {
    const currentUserString = this.profileService.userInfo;//localStorage.getItem('currentUser');
    if (currentUserString) {
      //this.currentUser = JSON.parse(currentUserString);
      this.currentUser = currentUserString;
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/newlogin']);
  }
}
