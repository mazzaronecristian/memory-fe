import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public form: FormGroup;
  public fail: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private au: AuthService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onRegister() {
    this.router.navigate(['/registration']);
  }
  onSubmit() {
    if (this.form.valid) {
      // this.loginService
      //   .doLogin(this.form.value.email, this.form.value.password)
      //   .subscribe((res: ArrayBuffer) => {
      //     console.log(res);
      //     if (res) {
      //       this.fail = false;
      //       this.au.setLoggedIn(true);
      //       this.router.navigate(['/memory']);
      //     } else {
      //       console.log('fail');
      //       this.fail = true;
      //     }
      //   });
    }
  }
}
