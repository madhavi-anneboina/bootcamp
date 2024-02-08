import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl,FormGroup, Validators,AbstractControl } from '@angular/forms';

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
       
        fgFullName:new FormGroup({
         firstName : new FormControl(null,[Validators.required,Validators.minLength(8)]),
         lastName : new FormControl(null,[Validators.required,Validators.minLength(5)]),
        }),
        email : new FormControl(),
        departments: new FormControl(),
        prizes : new FormArray([
          new FormControl(),
          new FormControl(),
          new FormControl()
        ])
      })
      
    }

    onSubmit(){
        console.log(this.userDetails)
    }
    alaphaCheck(control:AbstractControl):{[key:string]: boolean } | null {
      const regExp :  RegExp = /^[A-Za-z]+$/;
      const cValue = control.value
      if(!regExp.test(cValue)){
       return {alaphaCheck:true}
      }
       return null

    }
     get firstName(){
     return this.userDetails?.get('fgFullName')?.get('firstName')!
   }
   get lastName(){
    return this.userDetails?.get('fgFullName')?.get('lastName')!
  }
  get email(){
    return this.userDetails.get('email')!
  }
  get departments(){
    return this.userDetails.get('departments')!
  }
  get allPrizes(){
    return this.userDetails.get('prizes')! as FormArray
  }
   

}
