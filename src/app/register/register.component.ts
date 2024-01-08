import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    formRegister:FormGroup;
     constructor(){ 
    this.formRegister = this.createFormGroup();
  }
    createFormGroup(){
      return new FormGroup({
        username: new FormControl(),
        password : new FormControl()

      })
    }
    onsubmit(){
      console.log(this.formRegister.value)
    }

}
