import { Component, OnInit } from '@angular/core';
import { Faculty } from '../faculty';
import { Router } from '@angular/router';
import { FacultyService } from '../faculty.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrl: './faculty-login.component.css'
})
export class FacultyLoginComponent {
  email!:string;
  password!: string ;

  faculty!:Faculty;

  changetype:boolean = true;

  constructor(private router: Router, private facultyService:FacultyService) {}

  viewpassword() {
    this.changetype = !this.changetype;

   }
 
  
  facualtylogin() {
   
    this.facultyService.getFacultyByEmail(this.email).subscribe((data)=>
    {
      console.log(data);
      if (data == null) {
        alert("invalid credential");
      }

      else if(this.password.length<=6)
      {
        alert("Invalid password");
      }

      else {
        alert("successfully login");
        this.router.navigate(['/facultyportal']);
      }
    },
    (error:any)=>{
      alert("Pleace Enter valid email");
      console.log(error);})

  }

}
