import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../models/department.model';
import {Employee} from '../models/employee.model';
import { Login } from '../models/login.model';
import { LogStaffIn } from '../models/logMeIn.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<Employee[]> {
   return this.http.get<Employee[]>(this.baseApiUrl + '/api/Workers');
  }

  getAllDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(this.baseApiUrl + '/api/Workers/getAllDepartment');
  }

  AddEmployee(addEmployee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseApiUrl + '/api/Workers', addEmployee)
  }

  getEmployee(staffID: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + '/api/Workers/' + staffID);
  }

  modifyEmployee(staffID: string, modifyEmployeeRequest: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + '/api/Workers/' + staffID, modifyEmployeeRequest);
  }

  deleteEmployee(staffID: string): Observable<Employee> {    
    return this.http.delete<Employee>(this.baseApiUrl + '/api/Workers/' + staffID)
  }

  getSInglelog(staffID: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + '/api/Employee/' + staffID);
  }

  // punchOut(staffID: string, logStaffOut: LogStaffIn): Observable<LogStaffIn> {
  //   return this.http.put<LogStaffIn>(this.baseApiUrl + '/api/Employee/' + staffID, logStaffOut);
  // }
  punchOut(staffID: string, login: Login): Observable<Login> {
    return this.http.put<Login>(this.baseApiUrl + '/api/Employee/' + staffID, login);
  }
  
}
