import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class APIfunctionService<T> {
  
  constructor(@Inject(String) private configURL: string, private http: HttpClient) { }
  get(): Observable<T> {
    return this.http.get<T>(this.configURL);
  }
  getbyid(id): Observable<T> {
    return this.http.get<T>(this.configURL + `/${id}`)
  }
  post(model: T): Observable<T> {
    return this.http.post<T>(this.configURL, model)
  }
  put(model: T, id: any) {
    return this.http.put(this.configURL + `/${id}`, model)
  }
  delete(id: any): Observable<T> {
    return this.http.delete<T>(this.configURL + `/${id}`)
  }
}
