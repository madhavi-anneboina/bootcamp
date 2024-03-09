import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css']
})
export class ViewitemComponent {

  @Input() data: any;

  isExpanded: boolean = false;

  toggleDescription(): void {
    this.isExpanded = !this.isExpanded;
  }

  collapseDescription(): void {
    this.isExpanded = false;
  }


}
