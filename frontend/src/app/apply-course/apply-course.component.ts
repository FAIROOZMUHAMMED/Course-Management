import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { StudentService } from '../student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apply-course',
  templateUrl: './apply-course.component.html',
  styleUrls: ['./apply-course.component.css']
})
export class ApplyCourseComponent implements OnInit {

  student={
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
    }


    coursea:any=[]
    emailId:any;
    constructor(private courseService:CourseService, private studentService:StudentService, private router:Router) { }

  ngOnInit(): void {
      let courseId = localStorage.getItem("applyCourseId");
      this.emailId = localStorage.getItem("emailid");
      this.courseService.getCourseById(courseId).subscribe((data)=>{
        this.coursea=JSON.parse(JSON.stringify(data));
     
     this.student.course =this.coursea.coursename;
     this.student.email =this.emailId;
     this.student.professor =this.coursea.email;
    })
  }
  apply(){
    this.studentService.applyCourse(this.student);
    Swal.fire({
      title: 'Success',
      text: 'Wait Professor Response',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    this.router.navigate(['/courses'])
  }
}
