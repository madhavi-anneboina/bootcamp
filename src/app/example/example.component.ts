import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  // Difference b/w var let and const 
     constructor() {
     var name = "Ram"
     console.log(name)


 }

   myFunction() {
    let name = "latha"
    console.log(name)
 }
 
   
}
