import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-doctors-all',
  templateUrl: './doctors-all.component.html',
  styleUrls: ['./doctors-all.component.css']
})
export class DoctorsAllComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.allDoctors()
  }
  doctors: User[] = [];

  address:Address = new Address(1,"","","",1,"")
  newDoctor: User = new User(1,"","","","","","","",0,this.address,new Date,"")

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
  // doc1: User = new User(1, "log","pas","pic","fname","lna","male","em",7777,"Home",Date.now(),"Doc")
  // doc2: User = new User(1, "log","pas","pic","fname","lna","male","email",7777,"Home",Date.now(),"Doc")
 

 
}

