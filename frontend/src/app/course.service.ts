import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  course={
    coursename:'',
    duration:'',
    email:'',
    courseFee:'',
    description:''
  }

  constructor(public http:HttpClient) { }

  addCourse(course:any){
    return this.http.post<any>("http://localhost:3400/professor/createcourse",{"item":course});
   }

   courseapply(detail:any){
    return this.http.put<any>("http://localhost:3400/studenthome/course/apply",{"detail":detail});
    }

   getCourse(){
    return this.http.get("http://localhost:3400/student/courses/");
  }
  getCourseById(id:any){
    return this.http.get("http://localhost:3400/student/course/"+id);
  }

   getCourseByEmail(email:any){
     return this.http.get("http://localhost:3400/professor/course/"+email);
   }
  


}
