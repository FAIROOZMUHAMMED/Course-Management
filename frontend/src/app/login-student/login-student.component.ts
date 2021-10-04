import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {

  constructor(private _auth: AuthService,
    private _router:Router) { }
  User={
    email:'',
    password:'',
  }
  
  ngOnInit(): void {
  }
  loginUser () {
    
    this._auth.loginStdt(this.User)
    .subscribe(
      res => {
        localStorage.setItem('tokenSt', res.token);
        localStorage.setItem('emailid', this.User.email);
        localStorage.setItem('UserId', res.id);
        this._router.navigate([''])
      },
      err => {
        console.log(err);

        if (err.error=="Invalid credentials"){
          Swal.fire("Error", "Invalid Credentials ", "error");
          }else if(err.error=="User not registered.Please sign up"){
            Swal.fire("Error", "Student is not registered.Please sign up ", "error");
          }
        else{
          Swal.fire("Error", "Account doesn't exists ", "error")
        }

      }
    ) 
  }

}
