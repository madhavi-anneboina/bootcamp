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
  {path :'example', component:ExampleComponent, pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
