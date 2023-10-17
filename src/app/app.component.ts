import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';
import { ToastrService } from './services/toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Memory';
  toasterConfig!: ToasterConfig;
  constructor(private toastrService: ToastrService) {
    this.toasterConfig = this.toastrService.toasterConfig;
  }
}
