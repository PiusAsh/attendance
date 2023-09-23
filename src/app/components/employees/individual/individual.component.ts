import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { Login } from 'src/app/models/login.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {
  single: Login = {
    id: 0,
    staffID: '',
    firstName: '',
    lastName: '',
    department: '',
    punchIn: '',
    punchOut: '',
    message: '',
    code: '',
    fname: ''
  }

  p: number = 0;
  firstName: any;

  single2: Login[] = []



  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router, private loginService: LoginService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show()
    this.route.paramMap.subscribe({
      
      next: (params) => {
        setTimeout(() => {
          const staffid = params.get('staffID');
  
          if(staffid) {
            this.loginService.getSInglelog(staffid).subscribe({
              next: (response) => {
                this.single = response;
                console.log(this.single.punchIn.slice(11))
              }
            })
          }
          this.spinner.hide();
          
        }, 2000);
      }
    })

  }

  punchMeOut() {
    this.spinner.show();
    this.employeeService.punchOut(this.single.staffID, this.single).subscribe({
      next: (response) => {
       

        this.router.navigate(['employees/login']);
        setTimeout(() => {
          if(response.code == '00') {
            Swal.fire({
              icon: 'success',
              title: response.fname,
              text: response.message
            })
          }
  
          else if(response.code == '01')
  
           {
            Swal.fire({
              icon: 'warning',
              title: response.fname,
              text: response.message
            })
          }
          this.spinner.hide();
        }, 2000);
      }
    })
  }


}
