import { Component } from '@angular/core';

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.css']
})
export class SecondchildComponent {
  Approved :Boolean = false

  getApproval(cb:HTMLInputElement){
  console.log(cb.checked)

  }

}
