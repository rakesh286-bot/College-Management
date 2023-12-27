import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StudentLogin } from '../student-login';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.css'
})
export class StudentLoginComponent implements OnInit {

user:Student=new Student();

studentemail!:string;
  studentpassword!:string;

  changetype:boolean = true;


  ngOnInit(): void {
    
  }

  constructor(private studentService:StudentService, private router:Router) {

  }

  viewpassword() {
    this.changetype = !this.changetype;

   }

  Studentlogin(){
    this.studentService.getStudentByEmail(this.studentemail).subscribe((data:any)=>
    {
      console.log(data);
      
      if (data == null) {
        alert("invalid credential");
      }

      else if(this.studentpassword.length<=6)
      {
        alert("Invalid password");
      }

      else {
        alert("successfully login");
        this.router.navigate(['/studentportal']);
      }
    },
    (error:any)=>{
      alert("Pleace Enter valid email");
      console.log(error);})

  }

  // email: string = '';
  // password: string = '';

  // constructor(private router: Router, private httpClient: HttpClient) {}
  
  // Studentlogin() {
  //   const credentials = {
  //     email: this.email,
  //     password: this.password
  //   };

  //   this.httpClient.post('http://localhost:8080/api/student/login', credentials).subscribe(
  //     (response: any) => {
  //       alert("Login successful");
  //       console.log('Login successful:', response);
  //       this.router.navigate(['/studentportal']);
  //     },
  //     (error: any) => {
  //       alert("Login failed. Please check your credentials.");
  //       console.error('Login failed:', error);
  //     }
  //   );
  // } 

}
