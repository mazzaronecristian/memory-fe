import { Component } from '@angular/core';
import { ToasterConfig, ToasterContainerComponent } from 'angular2-toaster';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Memory';

  public toasterConfig: ToasterConfig;
  constructor(private toaster: ToastrService) {
    this.toasterConfig = this.toaster.toasterConfig;
  }
}
