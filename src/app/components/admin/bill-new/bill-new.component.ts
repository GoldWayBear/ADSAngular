import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { Bill } from 'src/app/models/bill';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-bill-new',
  templateUrl: './bill-new.component.html',
  styleUrls: ['./bill-new.component.css']
})
export class BillNewComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }
  // initialize with fake data
  address:Address = new Address(1,"","","",1,"")
  //Set due date to 3 mounth from current date
  dueDate:Date = new Date(new Date().setMonth(new Date().getMonth() + 3))

  user:User = new User(1,"","","","","","","",1,this.address,new Date,"")
  newBill:Bill = new Bill(1111111,this.user,1,new Date,this.dueDate)

  //Start with form being visible
  hideForm: boolean = false;
  //Error message set to not visible
  hideMessage: boolean = true;
  hideError: boolean = true;

  createBill(){
    this.adminService.createBill(this.newBill).subscribe(
      (data) => {
        console.log(data)
        //hide form and show a succsess message
        this.hideForm = true;
        this.hideError = true;
        this.hideMessage = false;
      },
      () => {
        
      console.log("could not creat bill")
      //keep form and display an error
      this.hideError = false;
      this.hideMessage = true;
    }
    )
  }
}
