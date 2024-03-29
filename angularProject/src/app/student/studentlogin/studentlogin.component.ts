import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';


console.log('studentModule');

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss']
})
export class StudentloginComponent implements OnInit {

  studentForm!: FormGroup;
  studentMatForm!: FormGroup;
  matForm: boolean = false;

  constructor(private fb: FormBuilder, private dataService:DataService) { }

  ngOnInit(): void {
    this.StudentFormData();
    //this.studentMatData();


  }
  //[A-Za-z]{3}[Pp][A-Za-z]{1}[0-9]{4}[A-Za-z]{1} //pan
  StudentFormData() {
    this.studentForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.maxLength(20)]],
      studentMob: ['8898956555', [Validators.pattern("^[0-9]{10}$"), Validators.maxLength(10)]],
      studentEmail: ['jay@gmail.com', [Validators.email]]

    })
  }

  studentData() {
    console.log(this.studentForm.value);
  }


  studentMatData() {
    this.matForm = true;
    this.studentMatForm = this.fb.group({
      studentMatName: ['', [Validators.required, Validators.maxLength(10)]],

    })
  }
   matFormData() {
    console.log(this.studentMatForm.value);
    this.dataService.matFormData = this.studentMatForm.value

  }

}
