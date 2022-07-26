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
//[A-Za-z]{3}[Pp][A-Za-z]{1}[0-9]{4}[A-Za-z]{1} //pan
    StudentFormData(){
      this.studentForm = this.fb.group({
        studentName:['',[Validators.required , Validators.maxLength(20)] ],
        studentMob:['8898956555',[ Validators.pattern("^[0-9]{10}$"), Validators.maxLength(10)]],
        studentEmail:['jay@gmail.com',[Validators.email]]

      })
    }

    studentData(){

      console.log(this.studentForm.value);
      
    }
}
