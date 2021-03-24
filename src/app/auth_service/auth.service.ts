import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import {User} from '../models/user';

//const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_API = 'http://3.86.155.49:8080/api/auth/';

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

  register(formData:any):Observable<any>{
    //let json = {username:username,email:email,password:password,role:role};
    let headers = new HttpHeaders({
      'Content-Type':'multipart/form-data',
      //"Accept": "application/json"
         });
    let options = { headers: headers };
    return this.httpClient.post(AUTH_API+'register',formData);
    /*
    return this.httpClient.post(AUTH_API+'register',{
      username,
      email, password}, 
      httpOptions);
      */
  }

  findAllUsers():Observable<User[]>{
    return this.httpClient.get(AUTH_API+'all') as Observable<User[]>;
  }
}