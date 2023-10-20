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
    animation: 'slideDown',
    positionClass: 'toast-top-right',
  });
  constructor(private toastr: ToasterService) {}

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
