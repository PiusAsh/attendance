import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  punchOut: Employee = {

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

  // isButtonVisible = true;


  constructor(private employeeService: EmployeesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const staffid = params.get('staffID');
        
        if(staffid) {
          this.employeeService.getSInglelog(staffid).subscribe({
            next: (response) => {
              this.punchOut = response;
            }
          })
        }
      }
    })
    
  }

  logOut() {
    // this.employeeService.punchOut(this.punchOut.staffID, this.punchOut).subscribe({
    //   next: (response) => {
       
    //     if(response.code == '00') {
    //       Swal.fire({
    //         icon: 'success',
    //         title: response.fname,
    //         text: response.message
    //       })
    //       this.router.navigate(['']);
    //     }

    //     else if(response.code == '01')

    //      {
    //       Swal.fire({
    //         icon: 'warning',
    //         title: response.fname,
    //         text: response.message
    //       })
    //       // this.isButtonVisible;

    //     }
    //   }
    // })
  }

}
