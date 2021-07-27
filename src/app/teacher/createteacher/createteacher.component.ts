import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/shared/teacher.service';

@Component({
  selector: 'app-createteacher',
  templateUrl: './createteacher.component.html',
  styleUrls: ['./createteacher.component.css']
})
export class CreateteacherComponent implements OnInit {

  teacher: Teacher = new Teacher();
  constructor(private sev : TeacherService , private router : Router) { }

  ngOnInit(): void {
  }
save(){
  this.sev.post(this.teacher).subscribe((data : any)=>{
    this.router.navigateByUrl('lt');
  })
}
}
