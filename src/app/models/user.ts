import { Address } from "./address";


export class User{
    userId:number;
    username:String;
    password:String;
    profilepicture:String;
    firstName:String;
    lastName:String;
    gender:String;
    email:String;
    phone:number;
    address:Address;
    dob:Date;
    role:String;

    constructor(userId:number, username:String, password:String, profilepicture:String, firstName:String, lastName:String, gender:String,
         email:String, phone:number, address:Address, dob:Date, role:String) {
             this.userId = userId;
             this.username = username;
             this.password = password;
             this.profilepicture = profilepicture;
             this.firstName = firstName;
             this.lastName = lastName;
             this.gender = gender;
             this.email = email;
             this.phone = phone;
             this.address = address;
             this.dob = dob;
             this.role = role;
         }

}