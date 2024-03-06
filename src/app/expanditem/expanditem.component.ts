import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expanditem',
  templateUrl: './expanditem.component.html',
  styleUrls: ['./expanditem.component.css']
})
export class ExpanditemComponent {
  childMessage :string = "Heloooo iam coming from child"
  @Input() data:any
  @Output() toggleDescription = new EventEmitter<void>();
  @Output() notifyParent : EventEmitter<string> = new EventEmitter<string>();

  // onToggleDescription(): void {
  //   this.toggleDescription.emit();
  // }


  // Child to parent Communication 
  sendNotification(): void {
    this.notifyParent.emit(this.childMessage);
  }

}
