import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.css']
})
export class FirstchildComponent {
  name = "coming from first child"

 @Input() MessageFromParent :string = ""
}
