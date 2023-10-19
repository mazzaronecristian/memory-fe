import { Injectable } from '@angular/core';
import { Toast, ToasterConfig, ToasterService } from 'angular2-toaster';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  public toasterConfig = new ToasterConfig({
    tapToDismiss: false,
    timeout: 5000,
    showCloseButton: true,
    animation: 'flyLeft',
    positionClass: 'toast-top-right',
  });
  constructor(private toastr: ToasterService) {}

  // public success(message: string, title?: string) {
  //   this.toastr.pop('success', title, message);
  // }
  // public error(message: string, title?: string) {
  //   debugger;
  //   this.toastr.pop('error', title, message);
  // }
  public showError(message: string, title?: string, timeoutMs?: number): Toast {
    const toastData = <Toast>{
      type: 'error',
      title: title,
      body: message,
      timeout: timeoutMs,
    };

    return this.toastr.pop(toastData);
  }
}
