import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  names: string[] = ["Madhavi", "Vani", "Rani"];
  selectedName :any = "Madhavi"

  addressData: any = {
    Madhavi: {
      apartment: "2701 landing drive",
      zipcode: "565779"
    },
    Vani: {
      apartment: "2707 landing drive",
      zipcode: "90248"
    },
    Rani: {
      apartment: "9760 landing drive",
      zipcode: "89032"
    }
  };
  findAddress(name: string) {
    return this.addressData[name] || {};
  }

}
