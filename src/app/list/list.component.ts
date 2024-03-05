import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
 
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
onRemove(index: number) {
  let value = this.form.controls['input'].value
  this.list.splice(index, 1)

}

onEdit(index: number) {
  this.editIndex = index;
  this.form.controls['input'].setValue(this.list[index]);
}
}
