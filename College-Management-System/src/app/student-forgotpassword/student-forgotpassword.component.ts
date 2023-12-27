import { Component } from '@angular/core';

@Component({
  selector: 'app-student-forgotpassword',
  templateUrl: './student-forgotpassword.component.html',
  styleUrl: './student-forgotpassword.component.css'
})
export class StudentForgotpasswordComponent {

  OnSubmit(){
    alert("please check your email for reset passwors");
  }


}
