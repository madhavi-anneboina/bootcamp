import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  myForm!: FormGroup;


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      username:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
      confirmPassword: new FormControl(null,[ Validators.required])
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')!.value === g.get('confirmPassword')!.value ? null : { mismatch: true };
  }

  onSubmit() {
    // Handle form submission here
    if (this.myForm && this.myForm.valid) {
      console.log('Form submitted successfully!');
    }
  }
  get username(){
    return this.myForm?.get('username')
  }
  get password(){
    return this.myForm?.get('password')
  }
  get confirmpassword(){
    return this.myForm?.get('confirmpassword')
  }
}
