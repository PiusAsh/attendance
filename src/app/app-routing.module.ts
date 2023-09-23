import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { IndividualComponent } from './components/employees/individual/individual.component';
import { LoginTableComponent } from './components/employees/login-table/login-table.component';
import { LoginComponent } from './components/employees/login/login.component';
import { PageNotFoundComponent } from './components/employees/page-not-found/page-not-found.component';
import { PasswordComponent } from './components/employees/password/password.component';
import { SignOutComponent } from './components/employees/sign-out/sign-out.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent 
  },

  {
    path: 'employees/employee-list',
    component: EmployeeListComponent
  },

  {
    path: 'employees/login-table',
    component: LoginTableComponent
  },

  {
    path: 'employees/login',
    component: LoginComponent
  },

  {
    path: 'employees/add',
    component: AddEmployeeComponent
  },
  {
    path: 'employees/sign-out/:staffID',
    component: SignOutComponent
  },
  {
    path: 'employees/edit/:staffID',
    component: EditEmployeeComponent
  },
  {
    path: 'employees/individual/:staffID',
    component: IndividualComponent
  },
  {
    path: 'employees/password/:staffID',
    component: PasswordComponent
  },
  { path: '**', pathMatch: 'full', 
  component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
