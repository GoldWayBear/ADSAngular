import {HTTP_INTERCEPTORS, HttpEvent} from '@angular/common/http';
import {HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {TokenStorageService} from './token-storage.service';
import {Observable} from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization';       // for Spring Boot back-end

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private token:TokenStorageService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let customRequest = request;
        const token = this.token.getToken();
        console.log("token: " +token);
        if (token != null) {
          // for Spring Boot back-end
          customRequest = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });    
        }
        return next.handle(customRequest);
    }
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
  