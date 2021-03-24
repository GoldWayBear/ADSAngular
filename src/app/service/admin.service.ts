import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';
import { Bill } from '../models/bill';
import { User } from '../models/user';


const ADMIN_URL = 'http://3.86.155.49:8080/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  getAllDoctors():Observable<User[]>{
    return this.httpClient.get(ADMIN_URL+"user/all") as Observable<User[]>
  }

  createDoctor(doctor:User):Observable<User>{

    console.log(doctor);

    return this.httpClient.post<User>(ADMIN_URL+"admin/new-doctor", doctor) 
  }

  getAllBills():Observable<Bill[]>{
    return this.httpClient.get(ADMIN_URL+"bill/all") as Observable<Bill[]>
  }
  createBill(bill:Bill):Observable<Bill>{
    return this.httpClient.post<Bill>(ADMIN_URL+"bill/new", bill) 
  }

  getAllAppointments():Observable<Appointment[]>{
    return this.httpClient.get(ADMIN_URL+"appointment/all") as Observable<Appointment[]>
  }
  createAppointment(appointment:Appointment):Observable<Appointment>{
    return this.httpClient.post<Appointment>(ADMIN_URL+"/appointment/new-spot", appointment) 
  }
}
