import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { FooterComponent } from './general/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { CreateteacherComponent } from './teacher/createteacher/createteacher.component';
import { ListeteacherComponent } from './teacher/listeteacher/listeteacher.component';
import { UpdateteacherComponent } from './teacher/updateteacher/updateteacher.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListstudentComponent,
    CreatestudentComponent,
    UpdateStudentComponent,
    CreateteacherComponent,
    ListeteacherComponent,
    UpdateteacherComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
