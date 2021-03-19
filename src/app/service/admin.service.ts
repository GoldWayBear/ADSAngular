import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  getAllDoctors():Observable<User[]>{
    return this.httpClient.get("http://localhost:8080/admin/all-doctors") as Observable<User[]>
  }

  createDoctor(doctor:User):Observable<User>{
    return this.httpClient.post<User>("http://localhost:8080/admin/new-doctor", doctor) 
  }
}
