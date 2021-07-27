import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { APIfunctionService } from 'src/app/shared/apifunction.service';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
student:Student  = new Student
id;
  constructor(private sev : StudentService  , private activeRoute : ActivatedRoute
    , private router : Router) { 
   this.id= this.activeRoute.snapshot.paramMap.get('id');
   this.sev.getbyid(this.id).subscribe((data: Student)=>{
     this.student = data;
   })
  }

  ngOnInit(): void {
  }
update(){
this.sev.put(this.student,this.id).subscribe((data)=>{
  this.router.navigateByUrl('ls');
})
}
}
