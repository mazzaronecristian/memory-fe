import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response.model';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from 'src/app/models/userDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  doRegistration(item: UserDTO): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(
      `${environment.servicesUrl}api/User`,
      item
    );
  }
}
