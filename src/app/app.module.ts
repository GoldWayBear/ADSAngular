import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { authInterceptorProviders } from './auth_service/authInterceptor';
import { UserPatientComponent } from './user-patient/user-patient.component';
import { UserDoctorComponent } from './user-doctor/user-doctor.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { RegisterComponent } from './register/register.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DoctorNewComponent } from './components/admin/doctor-new/doctor-new.component';
import { DoctorsAllComponent } from './components/admin/doctors-all/doctors-all.component'; 
import { FooterComponent } from './components/footer/footer.component';
import { ScheduleNewComponent } from './components/admin/schedule-new/schedule-new.component';
import { ScheduleAllComponent } from './components/admin/schedule-all/schedule-all.component';
import { BillNewComponent } from './components/admin/bill-new/bill-new.component';
import { BillsComponent } from './components/admin/bills/bills.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    UserPatientComponent,
    UserDoctorComponent,
    UserAdminComponent,
    RegisterComponent,
    DoctorComponent,
    DoctorNewComponent,
    DoctorsAllComponent,
    ScheduleNewComponent,
    ScheduleAllComponent,
    BillNewComponent,
    BillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
