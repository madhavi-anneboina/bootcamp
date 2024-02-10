import { Component } from '@angular/core';

@Component({
  selector: 'app-componentstemplates',
  templateUrl: './componentstemplates.component.html',
  styleUrls: ['./componentstemplates.component.css']
})
export class ComponentstemplatesComponent {

  name = "Madhavi"
  divColor="black"

  changeColor(){
    this.divColor = "red"
  }
  getName(){
    return this.name
  }

}
