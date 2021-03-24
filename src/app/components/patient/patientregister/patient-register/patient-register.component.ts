import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { PatientServiceService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  constructor(private patientServiceService:PatientServiceService,
    private router:Router) { }
    role:String = 'patient';
    newAddress:Address = new Address(2, "", "", "", 1, "");
    newPatient:User = new User(99999999, "", "", "", "", "", "", "", 0, this.newAddress, new Date(), this.role);

    selectedFile:any = null;
    onFileSelected(event:any) {
      console.log(event);
      this.selectedFile = event.target.files[0];
    }

  ngOnInit(): void {
  }

  //register the patients user and address info
  registerNewPatient(){
    
    let formData = new FormData();
    formData.append("image", this.selectedFile, this.selectedFile.name);
    formData.append('user', JSON.stringify(this.newPatient));
    this.patientServiceService.registerNewPatient(formData).subscribe(
      (data) => {
        console.log(data);
      },
      () => {
        console.log(this.newPatient);
        console.log(this.newAddress);
        console.log("Oops, something went wrong.");
      }
    )
  }

}
