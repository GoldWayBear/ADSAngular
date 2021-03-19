import { User } from "./user";

export class Patient{
    doctor:User;
    patient:User;

    constructor(doctor:User, patient:User){
        this.doctor = doctor;
        this.patient = patient;
    }
}

