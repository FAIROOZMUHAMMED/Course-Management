import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import Swal from 'sweetalert2';
import { CourseService } from '../course.service';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-enrolled-students',
  templateUrl: './enrolled-students.component.html',
  styleUrls: ['./enrolled-students.component.css']
})
export class EnrolledStudentsComponent implements OnInit {
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
  course:any=[];
  sendmail:any='';
  constructor(public Studentservice:StudentService,private CourseService:CourseService,private ProfessorService:ProfessorService) { }
  coursefil(i:any){

  }
  ngOnInit(): void {
    let emailId = localStorage.getItem("emailid");
    this.CourseService.getCourseByEmail(emailId).subscribe((data) => {
        this.course = JSON.parse(JSON.stringify(data));
        })

    this.Studentservice.enrolledStdList(emailId).subscribe((data) => {
    this.studentdata = JSON.parse(JSON.stringify(data));
          })   
  }

  
mail(){
  if(!this.sendmail){
    Swal.fire({
      title: 'warning',
      text: 'Please select a course',
      icon: 'warning',
      confirmButtonText: 'OK'
    })
  }else{
    this.ProfessorService.sendMail(this.sendmail)
    .subscribe(
      res => {
        Swal.fire({
          title: 'Success',
          text: 'Mail has sent',
          icon: 'success',
          confirmButtonText: 'OK'
        })
       
      },
      err => {
        console.log(err);
        Swal.fire({
          title: 'Error',
          text: 'No One Applied this course',
          icon: 'error',
          confirmButtonText: 'OK'
        })
        
      }) 
     
    }    

  }
  
}
