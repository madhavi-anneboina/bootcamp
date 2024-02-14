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
  MessageToChild :string ="Hello Iam conig from parent component"

  clors = ["yellow","pink","marron","white"]
eventInput: any;
userInput:string =  "Hello Madhavi"


  changeColor(){
    this.divColor = "blue"
    this.approved = !this.approved
  }
  getName(){
    return this.name
  }
  handleInput(e:Event){
  this.eventInput =  (<HTMLInputElement>e.target).value
  }

}
