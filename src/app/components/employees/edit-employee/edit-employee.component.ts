import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Department } from 'src/app/models/department.model';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  EmployeeModify: Employee = {
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


  remove = "Are you sure you want to remove"


  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const staffid = params.get('staffID');

        if(staffid) {
          this.employeeService.getEmployee(staffid).subscribe({
            next: (response) => {
              this.EmployeeModify = response;
            }
          })
        }
      }
    })

    this.employeeService.getAllDepartment().subscribe({
      next: (position) => {
        this.position = position;

        console.log(position);
      },

      error: (response) => {
        console.log(response);
      }
    })
  }

  modifyWorker() {
    this.spinner.show()
    this.employeeService.modifyEmployee(this.EmployeeModify.staffID, this.EmployeeModify).subscribe({
      next: (response) => {

        setTimeout(() => {
          
          this.router.navigate(['/employees/employee-list']);
          this.spinner.hide();
        }, 2000);

      }
      
    })
  }

  deleteWorker(staffID: string) {
    this.employeeService.deleteEmployee(staffID).subscribe({
      next: (response) => {
        this.router.navigate(['']);
      }
    })
  }

  refresh(form: NgForm) {
    form.resetForm()
  }

}
