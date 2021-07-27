import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { CreateteacherComponent } from './teacher/createteacher/createteacher.component';
import { ListeteacherComponent } from './teacher/listeteacher/listeteacher.component';
import { UpdateteacherComponent } from './teacher/updateteacher/updateteacher.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "cs", component: CreatestudentComponent },
  { path: "ls", component: ListstudentComponent },
  { path: "ls/:id", component: UpdateStudentComponent },
  { path: "ct", component: CreateteacherComponent },
  { path: "lt", component: ListeteacherComponent },
  { path: "lt/:id", component: UpdateteacherComponent },
  { path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
