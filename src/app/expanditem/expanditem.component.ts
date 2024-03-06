import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expanditem',
  templateUrl: './expanditem.component.html',
  styleUrls: ['./expanditem.component.css']
})
export class ExpanditemComponent {
  @Input() data:any
  @Output() toggleDescription = new EventEmitter<void>();

  // onToggleDescription(): void {
  //   this.toggleDescription.emit();
  // }

}
