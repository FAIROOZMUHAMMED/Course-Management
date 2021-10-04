import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { StudentService } from '../student.service';
import Swal from 'sweetalert2'
import { ProfessorService } from '../professor.service';


@Component({
  selector: 'app-applied-students',
  templateUrl: './applied-students.component.html',
  styleUrls: ['./applied-students.component.css']
})
export class AppliedStudentsComponent implements OnInit {

  studentdata:any=[{
    name:"",
    address:"",
    email:"",
    gender:"",
    skill:"",
    qualification:"",
    passout:"",
    course:"",
    district:"",
    professor:''
  }]
  status:any="";

  constructor(private Studentservice:StudentService,private ProfessorService:ProfessorService, private router:Router) { }

 
  ngOnInit(): void {
    let emailId = localStorage.getItem("emailid");
      this.Studentservice.getstudents(emailId).subscribe((data)=>{
        this.studentdata=JSON.parse(JSON.stringify(data));
      })
  }

  acceptuser(user:any)
  {
    this.ProfessorService.accept(user).subscribe(
      (res)=>{
        Swal.fire({
          title: 'accepted',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          window.location.reload();
        })
        

      }
      ,
      (error)=>
        {
          Swal.fire({
            title: 'Warning',
            text: 'Over the Limit',
            icon: 'warning',
            confirmButtonText: 'OK'
          })
          this.router.navigate(['/studentslist'])
        }
    )
  }

  rejectStd(user:any)
  {
    this.ProfessorService.reject(user).subscribe(
      (res:any)=>{
        Swal.fire({
          title: 'Rejected',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          window.location.reload();
        })
      }
      
     
    )
  }
}
