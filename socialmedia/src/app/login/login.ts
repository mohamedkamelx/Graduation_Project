import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Userservice } from '../services/userservice';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private _userservice:Userservice){}
  LoginForm:FormGroup = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
    remember: new FormControl(false,[])
  })
  submitLoginForm(form: FormGroup): void {
    if (form.invalid) {
      form.markAllAsTouched();
      return;
    }
    this._userservice.login(form.value.username,form.value.password)
  }
}
