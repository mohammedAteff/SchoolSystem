import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { APIfunctionService } from 'src/app/shared/apifunction.service';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {

  allData: Student[];
  constructor(private sev: StudentService) {
    this.sev.get().subscribe((data: any) => {
      this.allData = data;
    })
  }
  ngOnInit(): void {
  }
  delete(id) {
    this.sev.delete(id).subscribe((data) => {
      location.reload();
    })
  }
}



