import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { PatientDoctor } from 'src/app/models/patientdoctor';
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

  patients:PatientDoctor[] = [];
    

  ngOnInit(): void {
    this.viewSelfPatients();
  }

  formatImage(img:any): any {
    return 'data:image/jpeg;base64,' + img;
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


}
