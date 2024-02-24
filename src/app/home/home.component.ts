import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userDetails! :FormGroup
  username:any;
  password:any;
  confirmPassword: any;
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.userDetails = new FormGroup({
      username: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      password: new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      confirmPassword: new FormControl(null,[Validators.required])
    },
    // { validator: this.passwordMatchValidator }
    );
  }

  // passwordMatchValidator(fg: FormGroup){
  //   return fg.get('password').value === fg.get('confirmPassword').value
  //   ? null
  //   : { mismatch: true };
  // }

  onSubmit() {
    if (this.userDetails.valid) {
      // Perform your submit logic here
      console.log('Form submitted:', this.userDetails.value);
    }
  }
}


