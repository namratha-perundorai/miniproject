import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }
  buildForm(){
    this.registerForm = this.builder.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      username:['', Validators.required],
      password:['', Validators.required],
      confirmpassword:''

    })
  }
  register(){
    console.log(this.registerForm!.value)
  }

}
