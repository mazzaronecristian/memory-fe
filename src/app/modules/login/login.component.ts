import { Component, NgModule, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { ResponseCode } from 'src/app/models/responseCode.model';
import { ToasterConfig, ToasterService } from 'angular2-toaster';
import { ToastrService } from 'src/app/services/toastr.service';
import { NgForm, NgModel } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public toasterConfig = new ToasterConfig();
  constructor(
    private router: Router,
    private logService: LoginService,
    private toastrService: ToastrService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (!this.tokenService.isTokenExpired()) {
      this.router.navigate(['/menu']);
    }
  }
  onRegister() {
    this.router.navigate(['/registration']);
  }

  onSubmit(form: NgForm) {
    this.logService
      .doLogin(form.value.username, form.value.password)
      .subscribe((response) => {
        if (response.code === ResponseCode.OK) {
          const token = response.item;
          this.tokenService.setToken(token);
          this.router.navigate(['/menu']);
        } else {
          this.toastrService.showError(response.message, 'Errore');
        }
      });
  }
}
