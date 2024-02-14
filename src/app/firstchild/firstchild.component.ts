import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.css']
})
export class FirstchildComponent {
  name = "coming from first child"

 @Input() MessageFromParent :string = ""
 @Output() eventEmitter = new EventEmitter<string>()
 messageFromChild : string = "Meesage getting from first child"
}
