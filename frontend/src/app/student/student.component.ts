import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmpass:''
  }
  constructor(private StudentData:StudentService) { }


  ngOnInit(): void {
    let Id = localStorage.getItem("UserId");
    this.StudentData.getStudent(Id).subscribe((data)=>{
      this.student=JSON.parse(JSON.stringify(data));
    })
    
  }

}
