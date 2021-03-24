import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { Appointment } from 'src/app/models/appointment';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-schedule-all',
  templateUrl: './schedule-all.component.html',
  styleUrls: ['./schedule-all.component.css']
})
export class ScheduleAllComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.allAppointments()
  }

  appointments: Appointment[] = [];
 address:Address = new Address(1,"","","",1,"") 
 person: User = new User(1,"","","","","","","",0,this.address,new Date,"")
 appointment:Appointment = new Appointment(555555,new Date,this.person,this.person,"")

 allAppointments(){
   this.adminService.getAllAppointments().subscribe(
            //we can define 2 callback f-ns (when working with Observable)
      //1.succsess
      data => {
        this.appointments = data
        console.log(data);
      },
      //2.an error
      () => {
        console.log("Oooppps!Something went wrong")
      }
    )
  }
  status:String = "availiblegggg"
}