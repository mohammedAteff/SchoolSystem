import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/shared/teacher.service';

@Component({
  selector: 'app-listeteacher',
  templateUrl: './listeteacher.component.html',
  styleUrls: ['./listeteacher.component.css']
})
export class ListeteacherComponent implements OnInit {

  allData: Teacher[];
  constructor(private sev: TeacherService) {
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
