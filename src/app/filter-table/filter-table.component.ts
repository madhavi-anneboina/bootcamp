import { Component,NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent {
  searchText = '';

  data = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      occupation: 'Software Engineer',
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 25,
      occupation: 'Doctor',
    },
    {
      id: 3,
      name: 'Peter Parker',
      age: 20,
      occupation: 'Student',
    },
  ];

  filteredData = this.data;

  filterData() {
    this.filteredData = this.data.filter((item) =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }


}
