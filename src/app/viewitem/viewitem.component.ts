import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css']
})
export class ViewitemComponent {
  @Input() index = 0;
  @Input() data: any;

  @Output() clicked = new EventEmitter<number>();
    
  isExpanded: boolean = false;

  clickTitle(){
    this.clicked.emit(this.index);
  }
   
  toggleDescription(): void {
    this.isExpanded = !this.isExpanded;
  }

  collapseDescription(): void {
    this.isExpanded = false;
  }


}
