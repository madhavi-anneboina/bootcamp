import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.css']
})
export class FirstchildComponent {
  name  = "coming from first child"
  event = {name:'ngConf 2025', date: '3/1/2025', time: '8am', location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}}

 @Input() MessageFromParent :string = ""
 @Output() eventEmitter = new EventEmitter<string>()
 messageFromChild : string = "Meesage getting from first child"

 generateChildMessage(){
 this.eventEmitter.emit(this.messageFromChild)
 }
}

