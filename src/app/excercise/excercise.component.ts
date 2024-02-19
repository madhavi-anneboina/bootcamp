import { Component } from '@angular/core';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrls: ['./excercise.component.css']
})
export class ExcerciseComponent {

  Title = "Excercise"

  count = 1

  getTitle(){
    this.Title ="Excercise to learn"
  }
  getInc(){
    this.count++
  }
  getDec(){
    this.count--
  }

}
