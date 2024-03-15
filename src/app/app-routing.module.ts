import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ComponentstemplatesComponent } from './componentstemplates/componentstemplates.component';
import { ExcerciseComponent } from './excercise/excercise.component';
import { ExampleComponent } from './example/example.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RadionButtonComponent } from './radion-button/radion-button.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { ListComponent } from './list/list.component';
import { ExpandpanelComponent } from './expandpanel/expandpanel.component';
import { UserComponent } from './user/user.component';
import { ViewpanelComponent } from './viewpanel/viewpanel.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeetableComponent } from './employeetable/employeetable.component';


const routes: Routes = [
  
  {path :'', component:HomeComponent},
  {path :'home', component:HomeComponent},
  {path :'register', component:RegisterComponent, pathMatch:"full"},
  {path :'employees', component:EmployeesComponent, pathMatch:"full"},
  {path :'login', component:LoginComponent, pathMatch:"full"},
  {path :'forms', component:FormsComponent, pathMatch:"full"},
  {path :'form', component:FormBuilderComponent, pathMatch:"full"},
  {path :'components', component:ComponentstemplatesComponent, pathMatch:"full"},
  {path :'excercise', component:ExcerciseComponent, pathMatch:"full"},
  {path :'example', component:ExampleComponent, pathMatch:"full"},
  {path :'myform', component:MyFormComponent, pathMatch:"full"},
  {path :'dropdown', component:DropdownComponent, pathMatch:"full"},
  {path :'radio', component:RadionButtonComponent, pathMatch:"full"},
  {path :'formarray', component:FormArrayComponent, pathMatch:"full"},
  {path :'filter', component:FilterTableComponent, pathMatch:"full"},
  {path :'list', component:ListComponent, pathMatch:"full"},
  {path :'expandpanel', component:ExpandpanelComponent, pathMatch:"full"},
  {path :'users/:id', component:UserComponent, pathMatch:"full"},
  {path :'viewpanel', component:ViewpanelComponent, pathMatch:"full"},
  {path :'newlogin', component:NewloginComponent, pathMatch:"full"},
  {path :'dashboard', component:DashboardComponent, pathMatch:"full"},
  {path :'employee', component:EmployeetableComponent, pathMatch:"full"}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
