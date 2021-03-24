import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Address } from 'src/app/models/address';
import { Appointment } from 'src/app/models/appointment';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-schedule-new',
  templateUrl: './schedule-new.component.html',
  styleUrls: ['./schedule-new.component.css']
})
export class ScheduleNewComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }
  address:Address = new Address(1,"","","",1,"")
  user: User = new User(1,"","","","","","","",0,this.address,new Date,"")
  spot: Appointment = new Appointment(999999999,new Date(),this.user,this.user,"")

    //Start with form being visible
    hideForm: boolean = false;
    //Error message set to not visible
    hideMessage: boolean = true;
    hideError: boolean = true;

  createSpot(){
    this.adminService.createAppointment(this.spot).subscribe(
      (data) => {
        console.log(data)
           //hide form and show a succsess message
           this.hideForm = true;
           this.hideError = true;
           this.hideMessage = false;
      },
      () => {
      console.log("could not creat spot")
            //keep form and display an error
            this.hideError = false;
            this.hideMessage = true;
    }
    )
  }
}
