import { Component } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators,AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {

  userDetails = this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(8)]],
    lastName :['',[Validators.required,Validators.minLength(8)]],
    email:['',[Validators.required,]],
    departments:['']
  })
 
constructor(private fb:FormBuilder){

}



get firstName(){
  return this.userDetails?.get('firstName')!
}
get lastName(){
  return this.userDetails?.get('firstName')!
}

onSubmit(userDetails :FormGroup){
  console.log(this.userDetails)
}

}
