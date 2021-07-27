import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { APIfunctionService } from './apifunction.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends APIfunctionService <Student> {

  constructor(http: HttpClient) {
    super("http://localhost:3000/students", http)
  }
}
