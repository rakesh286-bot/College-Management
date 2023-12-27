import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faPersonThroughWindow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrl: './add-students.component.css'
})
export class AddStudentsComponent implements OnInit {

  registrationForm!:FormGroup;
  stud:Student=new Student();
  constructor(private studentService:StudentService, private router:Router , private fb:FormBuilder) {

  }

  ngOnInit():void{
    this.registrationForm=this.fb.group({
      firstname:new FormControl('',[Validators.required]),
      lastname:new FormControl('',[Validators.required]),
      age:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      DOB:new FormControl('',[Validators.required]),
      mobile:new FormControl('',[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
      gender:new FormControl('',[Validators.required]),
      course:new FormControl('',[Validators.required]),
      motherName:new FormControl('',[Validators.required]),
      fatherName:new FormControl('',[Validators.required])

    })
  }

  get firstname(){
    return this.registrationForm.controls['firstname'];
  }

  get lastname(){
    return this.registrationForm.controls['lastname'];
  }

  get age(){
    return this.registrationForm.controls['age']
  }

  get email(){
    return this.registrationForm.controls['email'];
  }

  get password(){
    return this.registrationForm.controls['password'];
  }
 
  get DOB(){
    return this.registrationForm.controls['DOB'];
  }

  get mobile(){
    return this.registrationForm.controls['mobile'];
  }
  
  get gender(){
    return this.registrationForm.controls['gender'];
  }

  get course(){
    return this.registrationForm.controls['course'];
  }

  get motherName(){
    return this.registrationForm.controls['motherName'];
  }

  get fatherName(){
    return this.registrationForm.controls['fatherName'];
  }

  saveStudent () {
    this.studentService['createStudent'](this.stud).subscribe((data:any)=>
    {
      console.log(data);
      this.goToStudentList();
    },
    (error:any)=>console.log(error));
  }
  goToStudentList() {
    this.router.navigate(['/students-list']);
  }


  onSubmit()
{ 
  console.log(this.stud);
  this.saveStudent();
  alert("Successfully added new student..!");
  this.router.navigate(['/students-list']);
}
}
