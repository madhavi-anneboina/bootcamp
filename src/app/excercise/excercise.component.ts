import { Component, EventEmitter, Input,Output} from '@angular/core';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrls: ['./excercise.component.css']
})
export class ExcerciseComponent {

  Title = "Excercise"
  displayText: string = "Hello, Angular!";
  addRemoveClass: boolean = false;
  addRemoveStyle: boolean = false;
  count = 1
  heading = "This is a peep"
  peep = {
    fullname:{
      firstName :"mad",
      lastName :"anne"
    },
    gender:'female'
  }

  boy = {
    Name :"Pranneth",
    gender:"m",
    photo:""
  }
  girl = {
    Name :"rani",
    gender:'f',
    photo:"images/girl.jpg"

  }
   person = this.boy
  @Input() size! : number |string
  @Output() sizeChange =  new EventEmitter <number>()

  dec(){
    this.resize(-1)
  }
  Inc(){
    this.resize(+1)
  }

  resize(delta:number){
    this.size = Math.min(40,Math.max(8, +this.size, + delta))
    this.sizeChange.emit(this.size)
  }
  getTitle(){
    this.Title ="Excercise to learn"
  }
  getInc(){
    this.count++
  }
  getDec(){
    this.count--
  }
  toggleClass() {
    this.addRemoveClass = !this.addRemoveClass;
  }

  toggleStyle() {
    this.addRemoveStyle = !this.addRemoveStyle;
  }



}
