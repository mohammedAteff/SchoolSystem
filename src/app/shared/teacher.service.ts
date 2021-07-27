import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';
import { APIfunctionService } from './apifunction.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends APIfunctionService <Teacher>{

  constructor(http :HttpClient) { 
    super("http://localhost:3000/teacher", http)

  }
}
