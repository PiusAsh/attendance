import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-table',
  templateUrl: './login-table.component.html',
  styleUrls: ['./login-table.component.css'],
})
export class LoginTableComponent implements OnInit {
  logins: Login[] = [];

  p: number = 0;
  firstName: any;

  totalPunchIn: any;
  totalPunchOut: any;
  totalPunchInLate: any;
  totalPunchOutEarly: any;

  constructor(private loginServices: LoginService) {}

  ngOnInit(): void {
    this.loginServices.getAllLogin().subscribe({
      next: (logins) => {
        this.logins = logins.filter((x) => x.punchIn);

        // this.logins = logins;

        this.totalPunchIn = logins.filter((x) => x.punchIn).length;

        this.totalPunchOut = logins.filter(
          (x) => x.punchOut !== 'On Duty'
        ).length;

        this.totalPunchInLate = logins.filter(
          (x) =>
            parseInt(
              x.punchIn.substring(x.punchIn.length - 5).replace(':', '')
            ) > 815
        ).length;

        console.log(this.totalPunchInLate);

        this.totalPunchOutEarly = logins.filter(
          (x) => parseInt(
            x.punchOut.substring(x.punchIn.length - 5).replace(':', '')
          ) < 1600
        ).length;

        console.log(this.logins);
      },

      error: (response) => {
        console.log(response);
      },
    });
  }

  Search() {
    if (this.firstName == '') {
      this.ngOnInit();
    } else {
      this.logins = this.logins.filter((res) => {
        return res.firstName.toLocaleLowerCase().match(this.firstName);
      });
    }
  }

  printMe() {
    window.print()
  }
}
