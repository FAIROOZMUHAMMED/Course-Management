import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ProfessorComponent } from './professor/professor.component';
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
import { StudentService } from './student.service';
import { ProfessorService } from './professor.service';
import { HeaderComponent } from './header/header.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { AppliedStudentsComponent } from './applied-students/applied-students.component';
import { EnrolledStudentsComponent } from './enrolled-students/enrolled-students.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ProfessorComponent,
    HomeComponent,
    StudentRegisterComponent,
    ProfessorRegisterComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    AddCoursesComponent,
    AppliedStudentsComponent,
    EnrolledStudentsComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
     NgbAlertModule

  ],
  providers: [AuthService, StudentService,ProfessorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
