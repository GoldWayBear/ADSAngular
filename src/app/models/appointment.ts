import { User } from "./user";

export class Appointment{
    appointmentId:number;
    time:Date;
    patient:User;
    doctor:User;
    status:String;
    

    constructor(appointmentId:number, time:Date, patient:User, doctor:User, status:String) {
             this.appointmentId = appointmentId;
             this.time = time;
             this.patient = patient;
             this.doctor = doctor;
             this.status = status;
             
         }

}