import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-register',
  templateUrl: './professor-register.component.html',
  styleUrls: ['./professor-register.component.css']
})
export class ProfessorRegisterComponent implements OnInit {

  constructor(private professorService:ProfessorService,private router: Router) { }
  Employer={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmpass:''
  }
  errormsg:any
  pwdSt:any
  txtcolr:any
  userVerify()
  {
    if (this.Employer.confirmpass===this.Employer.password) {
      this.professorService.newUser(this.Employer);
      console.log("Called");    
      // Swal.fire("Successfully Added", "","success");
      this.router.navigate(['/login']);
    } else {
      Swal.fire("Error", "Passwords are mismatch ", "error")
    }
  }
  ngOnInit(): void {
  }
  validatepassword(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])(?=.*\\W))|((?=.*[a-z])(?=.*[0-9])(?=.*\\W))|((?=.*[A-Z])(?=.*[a-z])(?=.*\\W))).*$", "g");
    var enoughRegex = new RegExp("(?=.{5,}).*", "g");

   if(false === enoughRegex.test(this.Employer.password)){
    this.pwdSt="More character";
    this.txtcolr="text-info";
    
   }
   else if(strongRegex.test(this.Employer.password)){
    this.pwdSt="Strong";
    this.txtcolr="text-success";
     
         
   }
   else if(mediumRegex.test(this.Employer.password)){
    this.pwdSt="Medium";
    this.txtcolr="text-warning";
    
   }
   else{
    this.pwdSt="Poor";
    this.txtcolr="text-danger";
   
   } 
  }
}
