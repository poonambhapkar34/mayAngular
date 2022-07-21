import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,FormControlName,NgForm ,FormsModule} from "@angular/forms";

console.log('studentModule');

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss']
})
export class StudentloginComponent implements OnInit {
  studentDataForm!:FormGroup
  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
// this.studentDataForm = this.fb.group({

// })

  }

}
