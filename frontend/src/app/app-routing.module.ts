import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { AppliedStudentsComponent } from './applied-students/applied-students.component';
import { EnrolledStudentsComponent } from './enrolled-students/enrolled-students.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfessorRegisterComponent } from './professor-register/professor-register.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [ 
  {
    path:"",component:HomeComponent
  },
  {
  path:"student",component:StudentComponent
},
{
  path:"professor",component:ProfessorComponent
},
{
  path:"professorRegister",component:ProfessorRegisterComponent
},
{
  path:"studentRegister",component:StudentRegisterComponent
},
{
  path:"login",component:LoginComponent
},
{
  path:"addCourse",component:AddCoursesComponent
},
{
  path:"studentslist",component:AppliedStudentsComponent
},
{
  path:"enrolledStudents",component:EnrolledStudentsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
