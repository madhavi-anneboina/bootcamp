import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {

  itemForm: FormGroup;
  editIndex: number | null = null;
  constructor(private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      itemName: ['', Validators.required],
      itemArray: this.fb.array([])
    });
  }

  get itemArray(): FormArray {
    return this.itemForm.get('itemArray') as FormArray;
  }

  addItem() {
    const itemNameControl = this.itemForm.get('itemName');
    
    if (itemNameControl) {
      const newItem = itemNameControl.value;
      this.itemArray.push(this.fb.control(newItem));
      itemNameControl.reset();
    }
  }

  editItem(index: number) {
    const currentItem = this.itemArray.at(index);

    if (currentItem) {
      this.editIndex = index;
      this.itemForm.get('itemName')?.setValue(currentItem.value);
    }
  }
  updateItem(index: number) {
    const itemNameControl = this.itemForm.get('itemName');
    const currentItem = this.itemArray.at(index);

    if (itemNameControl && currentItem) {
      currentItem.setValue(itemNameControl.value);
      itemNameControl.reset();
      this.editIndex = null;
    }
  }
  removeItem(index: number) {
    if (index > 0) {
      this.itemArray.removeAt(index);
    }
  }
  

}
