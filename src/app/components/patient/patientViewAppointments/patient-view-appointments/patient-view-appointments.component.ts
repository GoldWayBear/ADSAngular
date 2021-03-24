import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { PatientServiceService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-patient-view-appointments',
  templateUrl: './patient-view-appointments.component.html',
  styleUrls: ['./patient-view-appointments.component.css']
})
export class PatientViewAppointmentsComponent implements OnInit {

  constructor(private patientServiceService:PatientServiceService,
    private router:Router) { }

    appointments:Appointment[] = [];

   //retrieval is called as soon as the component is called, we might add parameterization or it can be handled server-side
   ngOnInit(): void {
    this.getMyAppointments();
  }

  //retrieves the patients's bills
  getMyAppointments(){
    this.patientServiceService.getMyAppointments().subscribe(
      (data) => {
        this.appointments = data;
      },
      () => {
        console.log("Oops, something went wrong.");
      }
    )
  }

}
