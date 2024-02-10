import { Component } from '@angular/core';

@Component({
  selector: 'app-componentstemplates',
  templateUrl: './componentstemplates.component.html',
  styleUrls: ['./componentstemplates.component.css']
})
export class ComponentstemplatesComponent {

  name = "Madhavi"
  divColor="black"

  clors = ["yellow","pink","marron","white"]


  changeColor(){
    this.divColor = "blue"
  }
  getName(){
    return this.name
  }

}
