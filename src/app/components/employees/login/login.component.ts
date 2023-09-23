import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogStaffIn } from 'src/app/models/logMeIn.model';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logMeIn: LogStaffIn = {
    staffID: '',
    password: '',
    message: '',
    code: '',
    fname: ''
  }

  constructor(private loginService: LoginService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  LogMeIn() {
    this.spinner.show();

    this.loginService.logIn(this.logMeIn).subscribe({
      next: (response) => {
      
        setTimeout(() => {
          if (response.code == '01') {
            Swal.fire({
              icon: 'success',
              title: `Welcome ${response.fname}`,
              text: response.message
            })
            this.router.navigate(['employees', 'individual', this.logMeIn.staffID])
            console.log(response.message);
          }
          else if (response.code == '02') {
            Swal.fire({
              icon: 'warning',
              title: 'Oopps...',
              text: response.message
            })
          }
        
          else if (response.code == '03') {
            Swal.fire({
              icon: 'error',
              title: 'error',
              text: response.message
            })
          }
        
          else if (response.code == '04') {
            Swal.fire({
              icon: 'warning',
              title: 'warning',
              text: response.message
            })
          }
          else if (response.code == '05') {
            Swal.fire({
              icon: 'error',
              title: 'error',
              text: response.message
            })
            console.log(response.message);
          }
          this.spinner.hide()
        }, 2000);
    
      },

      error: (error) => {
        console.log(error)
      }
    })
    // console.log(`Your StaffID is:${this.logMeIn.staffID} and your password is: ${this.logMeIn.password}`);
  }



}
