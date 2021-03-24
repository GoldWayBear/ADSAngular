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

import { TestComponent } from './test/test.component';
import {Roles} from './auth_service/roles.enum';
import {AuthGuard} from './auth_service/auth.guard';
import {UnauthpageComponent} from './auth_service/unauthpage/unauthpage.component';

import { DoctorAppointmentComponent } from './components/doctor/doctorAppointment/doctor-appointment/doctor-appointment.component';
import { PatientViewBillsComponent } from './components/patient/patientViewBills/patient-view-bills/patient-view-bills.component';
import { PatientViewAppointmentsComponent } from './components/patient/patientViewAppointments/patient-view-appointments/patient-view-appointments.component';

import { PatientRegisterComponent} from './components/patient/patientregister/patient-register/patient-register.component';

import { PatientDoctorsAllComponent } from './components/patient/patient-doctors-all/patient-doctors-all.component';



const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},

  {
    path:'admin', 
    component:UserAdminComponent,
    canActivate: [AuthGuard],
    data: {
      userRoles: [Roles.ADMIN] 
    }
  },

  {path:'admin/doctors', component:DoctorsAllComponent},
  {path:'admin/doctor-new', component:DoctorNewComponent},
  {path:'admin/schedule', component:ScheduleAllComponent},
  {path:'admin/scheduleng-new', component:ScheduleNewComponent},
  {path:'admin/bill-new', component:BillNewComponent},
  {path:'admin/bills', component:BillsComponent},

  {
    path:'doctor', component:UserDoctorComponent,
    canActivate: [AuthGuard],
    data: {
      userRoles: [Roles.DOCTOR] 
    }
  },

  {path:'doctorViewSelfPatients', component:DoctorComponent},
  {path:'test', component:TestComponent},
  // {path:'doctorViewBookedAppointments', component:DoctorAppointmentComponent},
  // {path:'bills', component:PatientViewBillsComponent},
  {path:'doctor/patients', component:DoctorComponent},
  {path:'doctor/appointments', component:DoctorAppointmentComponent},

  {
    path:'patient', 
    component:UserPatientComponent,
    canActivate: [AuthGuard],
    data: {
      userRoles: [Roles.PATIENT] 
      //userRoles: [Roles.ADMIN, Roles.PATIENT, Roles.DOCTOR] // Multiple Allowed User
    }
  },
  {path:'patient/bills', component:PatientViewBillsComponent},
  {path:'patient/appointments', component:PatientViewAppointmentsComponent},

  {path:'patient/doctors', component:PatientDoctorsAllComponent},


  {
    path:'unauth', component:UnauthpageComponent
  },
  {path: 'patient/new', component:PatientRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }