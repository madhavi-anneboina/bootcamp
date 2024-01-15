import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin:FormGroup;
  user$!:Observable<any>
  constructor(private http: HttpClient){ 
  this.formLogin = this.createFormGroup();
 
}
 createFormGroup(){
   return new FormGroup({
     username: new FormControl('',[Validators.required]),
     password : new FormControl('',[Validators.required])

   })
 }
 onsubmit(){
  let currentUser = this.formLogin.value.username
  let currentPassword = this.formLogin.value.password
   this.user$ = this.http.get( "http://localhost:3000/employees", 
   {
    params : {
      username :currentUser,
      password :currentPassword
    }
   }
    );
    this.user$.subscribe(data => {
     if(currentUser == data[0].username && currentPassword == data[0].password){
     console.log("Valid User")
     }  else{
      console.log("Invalid User")
     }

    })
     
 }
Oninit():void{

}

}
