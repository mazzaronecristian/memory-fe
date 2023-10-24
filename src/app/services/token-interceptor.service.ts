import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}
  intercept(
    request: HttpRequest<any>,
    handler: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers: { [name: string]: string } = {};

    //creo una copia delle headers della request intercettata
    request.headers.keys().forEach((key) => {
      const value = request.headers.get(key);
      if (value !== null) {
        headers[key] = value;
      }
    });

    let token = this.tokenService.getToken();

    if (!!token) {
      if (!token.startsWith('Bearer')) {
        token = `Bearer ${token}`;
      }

      headers['Authorization'] = token;
    }

    const requestClone = request.clone({
      setHeaders: headers,
    });

    return handler.handle(requestClone);
  }
}
