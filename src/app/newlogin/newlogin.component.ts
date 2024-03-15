import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
enum APP_USER{
  Login = 'currentUser'
}

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent {

  username: string = '';
  password: string = '';
  invalidCredentials: boolean = false;

  constructor(private router: Router, private profileService: ProfileService) {}
  login() {
    const mockUsers = [
      { Username: 'Abc', Password: 'Pass@1234', Name: 'Bob' },
      { Username: 'Xyz', Password: 'Pass@1234', Name: 'Julie' }
    ];
    const user = mockUsers.find(u => u.Username === this.username && u.Password === this.password);
    if (user) {
      //localStorage.setItem(APP_USER.Login, JSON.stringify(user));
      this.profileService.userInfo = user;
      this.router.navigate(['/dashboard']);
    } else {
      this.invalidCredentials = true;
    }

}
}
