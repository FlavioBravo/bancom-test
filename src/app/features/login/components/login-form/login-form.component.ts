import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [false],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  login() {
    console.log(this.loginForm.value);
    this.router.navigate(['dashboard']);
  }
}
