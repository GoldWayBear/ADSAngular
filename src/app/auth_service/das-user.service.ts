import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})

export class DasUserService {

  constructor(private httpClient:HttpClient) { }

  getAllContent():Observable<any>{
    return this.httpClient.get(API_URL+'all', {responseType:'text'});
  }

  getUserPatien():Observable<any>{
    return this.httpClient.get(API_URL+'patient',{ responseType: 'text' });
  }

  getUserDoctor():Observable<any>{
    return this.httpClient.get(API_URL+'doctor',{ responseType: 'text' });
  }

  getUserAdmin():Observable<any>{
    return this.httpClient.get(API_URL+'admin',{ responseType: 'text' });
  }
}
