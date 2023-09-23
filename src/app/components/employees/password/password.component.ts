import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  changePassword: Employee = {
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

  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router, private spinner: NgxSpinnerService  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const staffid = params.get('staffID');

        if(staffid) {
          this.employeeService.getEmployee(staffid).subscribe({
            next: (response) => {
              this.changePassword = response;
            }
          })
        }
      }
    })
  }

  changepassword() {
    this.spinner.show()
    this.employeeService.modifyEmployee(this.changePassword.staffID, this.changePassword).subscribe({
      next: (response) => {

        setTimeout(() => {
          Swal.fire({
            icon: 'success',
            title: 'Successful',
            text: "Password changed successfully"

          })
          this.router.navigate(['employees', 'individual', this.changePassword.staffID]);
          this.spinner.hide();
        }, 2000);

      }
      
    })
  }
 
}
