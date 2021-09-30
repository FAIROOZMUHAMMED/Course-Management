import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses=[{
    coursename:"",
    duration:'',
    email:'',
    courseFee:'',
    description:''
    }] 

  constructor(private courseService:CourseService,private router:Router,public _auth:AuthService) { }
  collapse:boolean=true;
  ngOnInit(): void {
    this.courseService.getCourse()
    .subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data));
      
    })
  }
  applyCourse(course:any)
  {
    localStorage.setItem("applyCourseId", course._id.toString());
    this.router.navigate(['applyCourse']);
  }
  colla(){
    this.collapse=!this.collapse
  }

}
