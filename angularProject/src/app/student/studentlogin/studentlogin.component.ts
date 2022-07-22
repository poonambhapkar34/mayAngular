import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';


console.log('studentModule');

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss']
})
export class StudentloginComponent implements OnInit {

  studentForm!:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.StudentFormData()

  }

    StudentFormData(){
      this.studentForm = this.fb.group({
        studentName:['Jay'],
        studentMob:['8898956555'],
        studentEmail:['jay@gmail.com']

      })
    }

    studentData(){

      console.log(this.studentForm.value);
      
    }
}
