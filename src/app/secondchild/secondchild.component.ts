import { visitAll } from '@angular/compiler';
import { Component,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.css']
})
export class SecondchildComponent {
  Approved :Boolean = false
  @ViewChild('fname') fName! : ElementRef 

  getApproval(cb:HTMLInputElement){
  console.log(this.fName.nativeElement.value)
  //this.fName = cb.value
  console.log(this.fName)

  }
 calledFromParent(){
  console.log("calling from parent")
 }
}
