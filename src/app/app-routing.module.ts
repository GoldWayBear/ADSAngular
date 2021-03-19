import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserAdminComponent} from './user-admin/user-admin.component';
import {UserDoctorComponent} from './user-doctor/user-doctor.component';
import {UserPatientComponent} from './user-patient/user-patient.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DoctorsAllComponent } from './components/admin/doctors-all/doctors-all.component';
import { DoctorNewComponent } from './components/admin/doctor-new/doctor-new.component';
import { ScheduleAllComponent } from './components/admin/schedule-all/schedule-all.component';
import { ScheduleNewComponent } from './components/admin/schedule-new/schedule-new.component';
import { BillNewComponent } from './components/admin/bill-new/bill-new.component';
import { BillsComponent } from './components/admin/bills/bills.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'patient', component:UserPatientComponent}, 
  {path:'admin', component:UserAdminComponent},
  {path:'admin/doctors', component:DoctorsAllComponent},
  {path:'admin/doctor-new', component:DoctorNewComponent},
  {path:'admin/schedule', component:ScheduleAllComponent},
  {path:'admin/schedule-new', component:ScheduleNewComponent},
  {path:'admin/bill-new', component:BillNewComponent},
  {path:'admin/bills', component:BillsComponent},
  {path:'doctor', component:UserDoctorComponent},
  {path:'doctorViewSelfPatients', component:DoctorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
