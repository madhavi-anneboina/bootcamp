import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {
  form!: FormGroup;
  list: string[] = [];

  editIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.form = new FormGroup({
      input: new FormControl()
    });
  }



  // editItem(index: number) {
  //   const currentItem = this.itemArray.at(index);

  //   if (currentItem) {
  //     this.editIndex = index;
  //     this.form.get('itemName')?.setValue(currentItem.value);
  //   }
  // }
  // updateItem(index: number) {
  //   const itemNameControl = this.form.get('itemName');
  //   const currentItem = this.itemArray.at(index);

  //   if (itemNameControl && currentItem) {
  //     currentItem.setValue(itemNameControl.value);
  //     itemNameControl.reset();
  //     this.editIndex = null;
  //   }
  // }

  onUpdate(index: number) {
    this.editIndex = index;
    this.form.controls['input'].setValue(this.list[index]);
  }
  
  removeItem(index: number) {
    if (index > 0) {
      this.list.splice(index, 1)  
    }
  }
 
  addList() {
    const value = this.form.controls['input'].value;
  
    if (value) {
      if (this.editIndex !== null) {
        this.list[this.editIndex] = value;
        this.editIndex = null;
      } else {
        this.list.push(value);
      }
      this.form.get('input')?.reset();
    }
  }

}
