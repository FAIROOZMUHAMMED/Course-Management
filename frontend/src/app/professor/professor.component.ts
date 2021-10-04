import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professor={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmpass:''
  }
  constructor(private ProfessrData:ProfessorService) { }

  ngOnInit(): void {
    let Id = localStorage.getItem("UserId");
    this.ProfessrData.getProfessor(Id).subscribe((data)=>{
      this.professor=JSON.parse(JSON.stringify(data));
    })
  }

}
