import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.model';
import { LogStaffIn } from '../models/logMeIn.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllLogin(): Observable<Login[]> {
    return this.http.get<Login[]>(this.baseApiUrl + '/api/Employee');
  }

  logIn(logMeIn: LogStaffIn): Observable<LogStaffIn> {
    return this.http.post<LogStaffIn>(this.baseApiUrl + '/api/Employee/Login', logMeIn);
  }

  getSInglelog(staffID: string): Observable<Login> {
    return this.http.get<Login>(this.baseApiUrl + '/api/Employee/' + staffID);
  }
 
}
