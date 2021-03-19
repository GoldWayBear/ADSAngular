import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(username:string, password:string):Observable<any>{
    let json = {username:username,password:password};
    return this.httpClient.post(AUTH_API+'login',json,httpOptions);
    /*
    return this.httpClient.post(AUTH_API+'login', {
      username,
      password},
      httpOptions);
    */
  }

  register(username:string, email:string,password:string, role:string):Observable<any>{
    let json = {username:username,email:email,password:password,role:role};
    return this.httpClient.post(AUTH_API+'register',json,httpOptions);
    /*
    return this.httpClient.post(AUTH_API+'register',{
      username,
      email, password}, 
      httpOptions);
      */
  }
}
