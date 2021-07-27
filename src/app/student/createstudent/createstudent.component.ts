import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { APIfunctionService } from 'src/app/shared/apifunction.service';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent implements OnInit {

  student: Student = new Student();
  constructor(private sev : StudentService , private router : Router) { }

  ngOnInit(): void {
  }
save(){
  this.sev.post(this.student).subscribe((data : any)=>{
    this.router.navigateByUrl('ls');
  })
}
}
