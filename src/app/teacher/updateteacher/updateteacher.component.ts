import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/shared/teacher.service';

@Component({
  selector: 'app-updateteacher',
  templateUrl: './updateteacher.component.html',
  styleUrls: ['./updateteacher.component.css']
})
export class UpdateteacherComponent implements OnInit {
  teacher:Teacher  = new Teacher
  id;
    constructor(private sev : TeacherService  , private activeRoute : ActivatedRoute
      , private router : Router) { 
     this.id= this.activeRoute.snapshot.paramMap.get('id');
     this.sev.getbyid(this.id).subscribe((data: Teacher)=>{
       this.teacher = data;
     })
    }
  
    ngOnInit(): void {
    }
  update(){
  this.sev.put(this.teacher,this.id).subscribe((data)=>{
    this.router.navigateByUrl('lt');
  })
  }
  }