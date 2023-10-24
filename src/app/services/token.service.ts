import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private jwtHelper: JwtHelperService) {}

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public setToken(token: string): void {
    if (!!token) localStorage.setItem('token', token);
  }

  public clearToken(): void {
    localStorage.removeItem('token');
  }

  public isTokenExpired(): boolean {
    const token = this.getToken();
    return !token && this.jwtHelper.isTokenExpired(token);
  }
}
