import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentitem={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmpass:''
}
  constructor(private http:HttpClient) { }
  newUser(studentitem:any)
  {   
    return this.http.post("http://localhost:3400/student/signup",{"student":studentitem})
    .subscribe()
  }
  

  applyCourse(items:any){
    return this.http.post("http://localhost:3400/student/apply",{"student":items})
    .subscribe()
  }

  appliedstudents(){
    return this.http.get("http://localhost:3400/student/list")
  }

  getstudents(email:any){
    return this.http.get("http://localhost:3400/student/applied/"+email);
  }
  
  enrolledStdlist(){
    return this.http.get("http://localhost:3400/student/enrolledlist");
  }

  enrolledStdList(email:any){
    return this.http.get("http://localhost:3400/student/enrolledlist/"+email);
  }


}
