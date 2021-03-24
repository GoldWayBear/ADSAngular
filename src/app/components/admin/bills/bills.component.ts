import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { Bill } from 'src/app/models/bill';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.allBills()
  }
  bills: Bill[] = [];
  // address:Address = new Address(1,"","","",1,"")
  // user: User = new User(1,"","","","","","","",0,this.address,new Date,"")
  // bill: Bill = new Bill(1,this.user,1,new Date,new Date)

  allBills(){
    this.adminService.getAllBills().subscribe(
            //we can define 2 callback f-ns (when working with Observable)
      //1.succsess
      data => {
        this.bills = data
        console.log(data);
      },
      //2.an error
      () => {
        console.log("Oooppps!Something went wrong")
      }
    )
  }
}
