import { User } from "./user";

export class PatientDoctor{
    doctor:User;
    patient:User;

    constructor(doctor:User, patient:User){
        this.doctor = doctor;
        this.patient = patient;
    }
}

