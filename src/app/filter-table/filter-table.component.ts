import { Component, NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { data } from './data';
import { debounceTime } from 'rxjs';

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
      occupation: 'Student'
    },
  ];
  

  filteredData = data;

  searchData = new FormControl('');

  // filterData() {
  //   this.filteredData = this.data.filter((item) =>
  //     item.name.toLowerCase().includes(this.searchText.toLowerCase())
  //   );
  // }

  ngOnInit() {
    this.searchData.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      console.log(value);
      this.filterData(value || '');
    })
  }

  filterData(value: string) {
    const filterText = value.toLowerCase();
    this.filteredData = data.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(filterText)
    );
  }


}
