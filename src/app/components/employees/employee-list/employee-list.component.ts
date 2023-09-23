import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee [] = [

    
    // {
    //   id: 1,
    //   staffID: "AJDJW",
    //   firstName: "Ayomikun",
    //   lastName: "Bassey",
    //   email: "ayomikunbassey@fishville.com",
    //   phone: 5765537886,
    //   department: "Account"
    // },
    // {
    //   id: 1,
    //   staffID: "AJDJW",
    //   firstName: "Ayomikun",
    //   lastName: "Bassey",
    //   email: "ayomikunbassey@fishville.com",
    //   phone: 5765537886,
    //   department: "Account"
    // },
    // {
    //   id: 1,
    //   staffID: "AJDJW",
    //   firstName: "Ayomikun",
    //   lastName: "Bassey",
    //   email: "ayomikunbassey@fishville.com",
    //   phone: 5765537886,
    //   department: "Account"
    // },
    // {
    //   id: 1,
    //   staffID: "AJDJW",
    //   firstName: "Ayomikun",
    //   lastName: "Bassey",
    //   email: "ayomikunbassey@fishville.com",
    //   phone: 5765537886,
    //   department: "Account"
    // },
    // {
    //   id: 1,
    //   staffID: "AJDJW",
    //   firstName: "Ayomikun",
    //   lastName: "Bassey",
    //   email: "ayomikunbassey@fishville.com",
    //   phone: 5765537886,
    //   department: "Account"
    // },
    // {
    //   id: 1,
    //   staffID: "AJDJW",
    //   firstName: "Ayomikun",
    //   lastName: "Bassey",
    //   email: "ayomikunbassey@fishville.com",
    //   phone: 5765537886,
    //   department: "Account"
    // },
    // {
    //   id: 1,
    //   staffID: "AJDJW",
    //   firstName: "Ayomikun",
    //   lastName: "Bassey",
    //   email: "ayomikunbassey@fishville.com",
    //   phone: 5765537886,
    //   department: "Account"
    // },
    // {
    //   id: 1,
    //   staffID: "AJDJW",
    //   firstName: "Ayomikun",
    //   lastName: "Bassey",
    //   email: "ayomikunbassey@fishville.com",
    //   phone: 5765537886,
    //   department: "Account"
    // },
    // {
    //   id: 1,
    //   staffID: "AJDJW",
    //   firstName: "Ayomikun",
    //   lastName: "Bassey",
    //   email: "ayomikunbassey@fishville.com",
    //   phone: 5765537886,
    //   department: "Account"
    // },
    // {
    //   id: 1,
    //   staffID: "AJDJW",
    //   firstName: "Ayomikun",
    //   lastName: "Bassey",
    //   email: "ayomikunbassey@fishville.com",
    //   phone: 5765537886,
    //   department: "Account"
    // },
    // {
    //   id: 1,
    //   staffID: "AJDJW",
    //   firstName: "Ayomikun",
    //   lastName: "Bassey",
    //   email: "ayomikunbassey@fishville.com",
    //   phone: 5765537886,
    //   department: "Account"
    // },

    
  ];

  firstName: any;
  lastName: any;
  p: number = 1;

  
    
  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe({
      next: (employees) => {
        this.employees = employees;
      },

      error: (response) => {
        console.log(response);
      }
    })
   
  }

  Search() {
    if(this.firstName == "") {
      this.ngOnInit();
      
    }

    else {
      this.employees = this.employees.filter(res => {
        return res.firstName.toLocaleLowerCase().match(this.firstName)
      });
    }
  }

  

}
