import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { ProfessorRegisterComponent } from './professor-register/professor-register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { StudentService } from './student.service';
import { ProfessorService } from './professor.service';
import { HeaderComponent } from './header/header.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { AppliedStudentsComponent } from './applied-students/applied-students.component';
import { EnrolledStudentsComponent } from './enrolled-students/enrolled-students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseService } from './course.service';
import { CoursesComponent } from './courses/courses.component';
import { ApplyCourseComponent } from './apply-course/apply-course.component';
import { MatSelectModule } from '@angular/material/select'; 
import {MatTableModule} from '@angular/material/table';
import { LoginStudentComponent } from './login-student/login-student.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HomeComponent,
    StudentRegisterComponent,
    ProfessorRegisterComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    AddCoursesComponent,
    AppliedStudentsComponent,
    EnrolledStudentsComponent,
    CoursesComponent,
    ApplyCourseComponent,
    LoginStudentComponent,
    AboutComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    MatTableModule

  ],
  providers: [AuthService, StudentService,ProfessorService,CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
