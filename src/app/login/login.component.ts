import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin:FormGroup;
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
     this.http.post(
       "http://localhost:3000/employees",
       this.formLogin.value
       )
       .subscribe(response =>console.log(response));
 }
Oninit():void{

}

}
