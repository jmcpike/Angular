import { Component, OnInit } from '@angular/core';

import {
 FormControl,
 Validators,
  FormBuilder
} from '@angular/forms';
import { loginGet } from '../Models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm = this.fb.group({
 
   userName: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required)
  
  })
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
   if( this.loginForm.valid){
    console.log(this.loginForm.value)
   }
    else{
      console.log('error')
    }
   

  }
}
