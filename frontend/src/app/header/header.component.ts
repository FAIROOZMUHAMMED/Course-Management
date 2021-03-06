import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthService,private _router:Router) { }
  logoutUser()
  {
  localStorage.removeItem('tokenProf')
  localStorage.removeItem("tokenSt")
  localStorage.removeItem("editEmployerrId");
  localStorage.removeItem('editEmployerId')
  localStorage.removeItem("getStudentId")
  localStorage.removeItem("UserId"); 
  localStorage.removeItem("applyCourseId")
  localStorage.removeItem("emailid");
  this._router.navigate([''])
  }
  ngOnInit(): void {
  }

}
