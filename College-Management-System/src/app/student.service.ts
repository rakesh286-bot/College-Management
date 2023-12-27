import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';
import { StudentLogin } from './student-login';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private baseURL="http://localhost:8080/api/student";
  constructor(private httpClient:HttpClient) { }
  getStudentsList():Observable<Student[]>
  {
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  createStudent(student:Student):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}`,student);
  }

  getStudentById(id:number):Observable<Student>
  {
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }

  updateStudent(id:number, student:Student):Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL}/${id}`, student);
  }

  deleteStudent(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getStudentByEmail(email:string):Observable<Object>
  {
    return this.httpClient.get<Student>(`${this.baseURL}/${"email"}/${email}`);
  }

  loginStudent(studentlogin:StudentLogin):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}/${"login"}`,studentlogin);
  }



  // loginStudent(email:string):S
  // Observable<object>
  // {
  //   return this.httpClient.get<Student>(`${this.baseURL}/${/login}`);
  // }

}

