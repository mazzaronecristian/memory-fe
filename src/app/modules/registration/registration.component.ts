import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { resourceUsage } from 'process';
import { RegistrationService } from './services/registration.service';
import { UserDTO } from 'src/app/models/userDTO';
import { ROLE } from 'src/app/constants/roles';
import { ResponseCode } from 'src/app/models/responseCode.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private regService: RegistrationService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    const newUser = new UserDTO();
    newUser.id = 0;
    newUser.username = form.value.username;
    newUser.password = form.value.password;
    newUser.email = form.value.email;
    newUser.role = ROLE.Player;
    this.regService.doRegistration(newUser).subscribe((response) => {
      if (response.code == ResponseCode.OK) this.router.navigate(['/login']);
    });
  }
}
