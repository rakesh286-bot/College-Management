import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty-forgotpassword',
  templateUrl: './faculty-forgotpassword.component.html',
  styleUrl: './faculty-forgotpassword.component.css'
})
export class FacultyForgotpasswordComponent {

  OnSubmit(){
    alert("please check your email for reset passwors");
  }

}
