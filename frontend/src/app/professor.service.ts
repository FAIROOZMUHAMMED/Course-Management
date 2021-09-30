import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  professoritem={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmpass:''
}
  constructor(private http:HttpClient) { }
  newUser(professoritem:any)
  {   
    return this.http.post("http://localhost:3400/professor/signup",{"professor":professoritem})
    .subscribe(data =>{console.log(data)})
  }
  getProfessor(id:any){
    return this.http.get("http://localhost:3400/professor/"+id);
  }
  getProfessors(){
    return this.http.get("http://localhost:3400/professor");
  }
  reject(student:any){
    return this.http.put("http://localhost:3400/professor/deleteStudent",student)
   }
   accept(student:any){
    return this.http.put("http://localhost:3400/professor/acceptStudent",student)
   }

   sendMail(items:any){
    return this.http.post('http://localhost:3400/professor/sendmail',{"course":items})
  }
}
