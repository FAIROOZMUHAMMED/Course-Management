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
    .subscribe(data =>{console.log(data)})
  }
  getStudent(id:any){
    return this.http.get("http://localhost:3400/student/"+id);
  }
  getStudents(){
    return this.http.get("http://localhost:3400/student");
  }
}
