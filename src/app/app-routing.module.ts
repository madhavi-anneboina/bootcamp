import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  
  {path :'', component:HomeComponent},
  {path :'home', component:HomeComponent},
  {path :'register', component:RegisterComponent, pathMatch:"full"},
  {path :'employees', component:EmployeesComponent, pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
