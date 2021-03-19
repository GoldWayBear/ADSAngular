import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { User } from '../models/user';
import { Appointment } from '../models/appointment';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class UserDoctorServiceService {

  constructor(private HttpClient:HttpClient) { }

  viewSelfPatients():Observable<Patient[]> {

    return this.HttpClient.get('http://localhost:8080/doctor/viewSelfPatients?doctorId=1') as Observable<Patient[]>

  }

  viewBookedAppointments():Observable<Appointment[]> {
    return this.HttpClient.get('http://localhost:8080/doctor/viewBookedAppointments') as Observable<Appointment[]>;

  }
}
