import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Userservice } from '../services/userservice';



function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirm = group.get('confirmPassword')?.value;

  return password === confirm ? null : { mismatch: true };
}



@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  constructor(private _userservice:Userservice){}
  RegisterForm:FormGroup = new FormGroup({
    username:new FormControl('',[Validators.required, Validators.minLength(6)]),
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
    confirmPassword:new FormControl('',[Validators.required])
  },{validators:passwordMatchValidator})
  submitRegisterForm(form:FormGroup):any{
    if (form.invalid) {
      form.markAllAsTouched();
      console.log( form.errors);
    }
    this._userservice.register(form.value.username,form.value.password)
  }

}
