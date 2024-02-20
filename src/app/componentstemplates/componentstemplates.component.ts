import { Component, ViewChild } from '@angular/core';
import { SecondchildComponent } from '../secondchild/secondchild.component';

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
  @ViewChild(SecondchildComponent) secondChild! : SecondchildComponent;
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
  MessageFromChildren(msg:string){
    console.log("ok" + msg)
  }
  ngAfterViewInit(){
    this.secondChild.calledFromParent()
  }
}
