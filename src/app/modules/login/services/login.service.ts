import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from 'src/app/models/api-response.model';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public doLogin(
    username: string,
    pwd: string
  ): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(
      `${environment.servicesUrl}api/Login`,
      {
        username: username,
        password: pwd,
      }
    );
  }
}
