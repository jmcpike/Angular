import { Component, OnInit } from '@angular/core';

import {
 UntypedFormControl,
 Validators,
  UntypedFormBuilder
} from '@angular/forms';
import { loginGet } from '../Models/login';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm = this.fb.group({
 
   userName: new UntypedFormControl('', Validators.required),
  password: new UntypedFormControl('', Validators.required)
  
  })
  constructor( private fb: UntypedFormBuilder, private api:ApiService) { }

  ngOnInit(): void {
  }

  login(){
   if( this.loginForm.valid){
    console.log(this.loginForm.value)
    this.api.getAuthentication(this.loginForm.value.userName,this.loginForm.value.password)
    .subscribe((loginData)=>{
      console.log(loginData)
    });
   }
    else{
      console.log('error')
    }
   

  }
}
