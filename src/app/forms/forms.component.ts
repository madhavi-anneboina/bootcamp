import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{
  userDetails! :FormGroup
  constructor(){
  }

    ngOnInit(): void{
      this.userDetails = new FormGroup({
        firstName : new FormControl(null,[Validators.required,Validators.minLength(8)]),
        lastName : new FormControl(null,[Validators.required,Validators.minLength(5)]),
        email : new FormControl(),
        departments: new FormControl(),
        prizes : new FormArray([
          new FormControl(null),
          new FormControl(null),
          new FormControl(null)
        ])
      })
      
    }

    onSubmit(){
        console.log(this.userDetails)
    }
     get firstName(){
     return this.userDetails.get('firstName')!
   }
   get lastName(){
    return this.userDetails.get('lastName')!
  }
  get email(){
    return this.userDetails.get('email')!
  }
  get departments(){
    return this.userDetails.get('departments')!
  }
   

}
