import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-radion-button',
  templateUrl: './radion-button.component.html',
  styleUrls: ['./radion-button.component.css']
})
export class RadionButtonComponent {
  genderForm!: FormGroup;
 
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.genderForm = this.fb.group({
      gender: ['', Validators.required],
      maleInput: [{ value: '', disabled: true }, Validators.required],
      femaleInput: [{ value: '', disabled: true }, Validators.required],
    });
  }
  toggleInputs(): void {
    const genderControl = this.genderForm.get('gender');
  
    if (genderControl?.value === 'Male') {
      this.genderForm.get('maleInput')!.enable();
      this.genderForm.get('femaleInput')!.disable();
    } else if (genderControl?.value === 'Female') {
      this.genderForm.get('femaleInput')!.enable();
      this.genderForm.get('maleInput')!.disable();
    }
  }

}

