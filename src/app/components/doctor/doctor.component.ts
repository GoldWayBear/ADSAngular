import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { Patient } from 'src/app/models/patient';
import { User } from 'src/app/models/user';
import { UserDoctorServiceService } from 'src/app/service/user-doctor-service.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private userDoctorServiceService:UserDoctorServiceService,
    private router:Router) { }

  patients:Patient[] = [];
    appointments:Appointment[] = [];

  ngOnInit(): void {
    this.viewSelfPatients();
  }

  //retrieves the doctor's own patients
  viewSelfPatients(){
    this.userDoctorServiceService.viewSelfPatients().subscribe(
      (data) => {
        this.patients = data;
        console.log(data);
      },
      () => {
        console.log("Oops, something went wrong.");
      }
    )
  }
//retrieves the doctor's appointments that are booked and active
  viewBookedAppointments(){
    this.userDoctorServiceService.viewBookedAppointments().subscribe(
      (data) => {
        this.appointments = data;
      },
      () => {
        console.log("Oops, something went wrong.");
      }
    )
  }

}
