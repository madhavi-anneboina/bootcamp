import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ComponentstemplatesComponent } from './componentstemplates/componentstemplates.component';
import { FirstchildComponent } from './firstchild/firstchild.component';
import { SecondchildComponent } from './secondchild/secondchild.component';
import { ExcerciseComponent } from './excercise/excercise.component';
import { FirstChildChildComponent } from './first-child-child/first-child-child.component';
import { BoldandblueDirective } from './boldandblue.directive';
import { ExampleComponent } from './example/example.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    EmployeesComponent,
    LoginComponent,
    AdminComponent,
    FormsComponent,
    FormBuilderComponent,
    ComponentstemplatesComponent,
    FirstchildComponent,
    SecondchildComponent,
    ExcerciseComponent,
    FirstChildChildComponent,
    BoldandblueDirective,
    ExampleComponent,
    MyFormComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
