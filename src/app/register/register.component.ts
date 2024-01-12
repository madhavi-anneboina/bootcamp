import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    formRegister:FormGroup;
     constructor(private http: HttpClient){ 
    this.formRegister = this.createFormGroup();
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
          this.formRegister.value
          )
          .subscribe(response =>console.log(response));
    }
  Oninit():void{

  }
}
