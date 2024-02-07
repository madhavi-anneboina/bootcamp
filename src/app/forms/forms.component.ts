import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

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
        firstName : new FormControl(null,[Validators.required,Validators.minLength(2)]),
        lastName : new FormControl(null,[Validators.required,Validators.minLength(2)])

      })
      
    }

    onSubmit(){
        console.log("submitted")
    }
     get firstName(){
     return this.userDetails.get('firstName')!
   }
   

}
