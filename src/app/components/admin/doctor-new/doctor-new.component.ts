import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-doctor-new',
  templateUrl: './doctor-new.component.html',
  styleUrls: ['./doctor-new.component.css']
})
export class DoctorNewComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  address:Address = new Address(1,"","","",1,"")
  newDoctor: User = new User(1,"","","","","","","",0,this.address,new Date,"")

  createDoctor(){
    this.adminService.createDoctor(this.newDoctor).subscribe(
      (data) => {
        console.log(data)
      },
      () => {
      console.log("could not creat doctor")
    }
    )
  }
}
