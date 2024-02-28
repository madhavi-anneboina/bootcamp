import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-radion-button',
  templateUrl: './radion-button.component.html',
  styleUrls: ['./radion-button.component.css']
})
export class RadionButtonComponent {
  genderForm!: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.genderForm = this.fb.group({
      gender: ['', Validators.required],
      maleInput: [{ value: 'from', disabled: true }, Validators.required],
      femaleInput: [{ value: '', disabled: true }, Validators.required],
    });

    this.employeeService.getEmployee().subscribe({
      next: (r) => {
        console.log(r);
      },
      error: (e) => {

      }
    });
  }
  clickevent() {
    console.log(this.genderForm.getRawValue())
  }

  toggleInputs(): void {
    const genderControl = this.genderForm.get('gender');

    const { gender } = this.genderForm.getRawValue();

    if (gender === 'Male') {
      this.genderForm.get('maleInput')!.enable();
      this.genderForm.get('femaleInput')!.disable();
    } else if (gender === 'Female') {
      this.genderForm.get('femaleInput')!.enable();
      this.genderForm.get('maleInput')!.disable();
    }
  }

}

