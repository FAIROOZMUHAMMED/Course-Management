import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {


  constructor(private courseService:CourseService,private router: Router) { }
  course={
    coursename:'',
    duration:'',
    email:'',
    courseFee:'',
    description:'',
  }
  email:any=[];
  addCourse()
  {
       if(this.course.coursename && this.course.duration && this.course.email && this.course.courseFee && this.course.description !==""){
        this.courseService.addCourse(this.course)
        .subscribe((data)=>{
         
        })
        Swal.fire("Successfully Added", "","success");
        this.router.navigate(['/courses']);
       }
       else{
        Swal.fire("Error", "Fill the Fields ", "error");
       }
   
  }
  ngOnInit(): void {
    this.email = localStorage.getItem("emailid");
    this.course.email=this.email;

  }
 
}
