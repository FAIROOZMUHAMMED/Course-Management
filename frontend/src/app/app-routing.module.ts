import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { AppliedStudentsComponent } from './applied-students/applied-students.component';
import { ApplyCourseComponent } from './apply-course/apply-course.component';
import { CoursesComponent } from './courses/courses.component';
import { EnrolledStudentsComponent } from './enrolled-students/enrolled-students.component';
import { HomeComponent } from './home/home.component';
import { LoginStudentComponent } from './login-student/login-student.component';
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
  path:"courses",component:CoursesComponent
},
{
  path:"applyCourse",component:ApplyCourseComponent
},
{
  path:"enrolledStudents",component:EnrolledStudentsComponent
},
{
  path:"studentlogin",component:LoginStudentComponent
},
{
  path:"aboutus",component:AboutComponent
},
{
  path:"studentprofile",component:StudentComponent
},
{
  path:"professorprofile",component:ProfessorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
