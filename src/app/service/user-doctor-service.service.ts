import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Appointment } from '../models/appointment';
import { PatientDoctor } from '../models/patientdoctor';

const DOCTOR_URL = 'http://3.86.155.49:8080/';
@Injectable({
  providedIn: 'root'
})

export class UserDoctorServiceService {

  constructor(private HttpClient:HttpClient) { }

  viewSelfPatients():Observable<PatientDoctor[]> {
    return this.HttpClient.get(DOCTOR_URL+'doctor/view-self-patients?doctorId=2') as Observable<PatientDoctor[]>
  }

  viewBookedAppointments():Observable<Appointment[]> {
    return this.HttpClient.get(DOCTOR_URL+'doctor/view-booked-appointments?doctorId=1') as Observable<Appointment[]>;
  }
}
