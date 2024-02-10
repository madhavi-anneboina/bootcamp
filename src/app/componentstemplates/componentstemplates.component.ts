import { Component } from '@angular/core';

@Component({
  selector: 'app-componentstemplates',
  templateUrl: './componentstemplates.component.html',
  styleUrls: ['./componentstemplates.component.css']
})
export class ComponentstemplatesComponent {

  name = "Madhavi"
  divColor="black"
  approved = false

  clors = ["yellow","pink","marron","white"]


  changeColor(){
    this.divColor = "blue"
    this.approved = !this.approved
  }
  getName(){
    return this.name
  }
  handleInput(){
    console.log("data logged in")
  }

}
