import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployee: Employee = {
    id: 0,
    staffID: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    department: '',
    code: '',
    message: '',
    fname: ''
  }

  position: Department[] = [];

  errormessage: any;
  constructor(private employeeServices: EmployeesService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.employeeServices.getAllDepartment().subscribe({
      next: (position) => {
        this.position = position;

        console.log(position);
      },

      error: (response) => {
        console.log(response);
      }
    })
  }
  addStaff() {
    this.spinner.show()
    this.employeeServices.AddEmployee(this.addEmployee).subscribe({
      next: (response) => {
        
        setTimeout(() => {
          if (response.code == '00') {
            Swal.fire({
              icon: 'success',
              title: 'Welcome',
              text: `${response.message} ${response.fname}` 
            });
            this.router.navigate(['employees/employee-list'])
          }
  
          else if (response.code == '01') {
            Swal.fire({
              icon: 'warning',
              title: "ooops..",
              text: response.message
  
            })
          }
        
          this.spinner.hide()
        }, 4000);  
        
      },
      error: (error) => {
        Swal.fire("Opps....", `${this.errormessage = error + " " +  this.addEmployee.staffID + " "+ "already exist"}`, 'error')
        console.log(error)
        // this.errormessage = error
      }
      
    });
    
    // console.log(this.addEmployee);
  } 

}
