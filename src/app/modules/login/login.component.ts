import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ResponseCode } from 'src/app/models/responseCode.model';
import { ToasterConfig, ToasterService } from 'angular2-toaster';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public toasterConfig = new ToasterConfig({
    tapToDismiss: false,
    timeout: 5000,
    showCloseButton: true,
    animation: 'flyLeft',
    positionClass: 'toast-top-right',
  });
  constructor(
    private router: Router,
    private logService: LoginService,
    private toasterService: ToastrService
  ) {}

  onRegister() {
    this.router.navigate(['/registration']);
  }

  onSubmit(form: NgForm) {
    this.logService
      .doLogin(form.value.username, form.value.password)
      .subscribe((response) => {
        if (response.code === ResponseCode.OK) {
          // localStorage.setItem('token', response.data);
          // this.router.navigate(['/home']);
        }
        console.log(response);
        this.toasterService.error(response.message, 'Error');
      });
  }
}
