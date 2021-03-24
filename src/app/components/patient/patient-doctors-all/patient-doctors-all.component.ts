import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-patient-doctors-all',
  templateUrl: './patient-doctors-all.component.html',
  styleUrls: ['./patient-doctors-all.component.css']
})
export class PatientDoctorsAllComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.allDoctors()
  }
  doctors: User[] = [];

  address:Address = new Address(1,"","","",1,"")
  doctor: User = new User(1,"","","","","","","",0,this.address,new Date,"")

  allDoctors(){
    this.adminService.getAllDoctors().subscribe(
            //we can define 2 callback f-ns (when working with Observable)
      //1.succsess
      data => {
        this.doctors = data
        console.log(data);
        console.log(this.doctors);
      },
      //2.an error
      () => {
        console.log("Oooppps!Something went wrong")
      }
    )

}
updateDoctor(){
  this.adminService.createDoctor(this.doctor).subscribe(
    (data) => {
      console.log(data)
    },
    () => {
    console.log("could not creat doctor")
  }
  )
}
}
