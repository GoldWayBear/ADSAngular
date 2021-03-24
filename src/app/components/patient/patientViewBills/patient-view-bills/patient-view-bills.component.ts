import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/models/bill';
import { PatientServiceService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-patient-view-bills',
  templateUrl: './patient-view-bills.component.html',
  styleUrls: ['./patient-view-bills.component.css']
})
export class PatientViewBillsComponent implements OnInit {

  constructor(private patientServiceService:PatientServiceService,
    private router:Router) { }

    bills:Bill[] = [];

    //retrieval is called as soon as the component is called, we might add parameterization or it can be handled server-side
  ngOnInit(): void {
    this.viewMyBills();
  }
//retrieves the patients's bills
  viewMyBills(){
    this.patientServiceService.viewMyBills().subscribe(
      (data) => {
        this.bills = data;
      },
      () => {
        console.log("Oops, something went wrong.");
      }
    )
  }

}
