import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http: HttpClient) { }


  loginProf(user:any)
  {
    return this.http.post<any>("http://localhost:3400/login/professor", user)
  }

  loginStdt(user:any)
  {
    return this.http.post<any>("http://localhost:3400/login/student", user)
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  StudentloggedIn(){
    return !!localStorage.getItem('tokenSt')
  }
  ProfessorloggedIn(){
    return !!localStorage.getItem('tokenProf')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
 
}
