export class Address{
    addressId:number;
    street:String;
    city:String;
    state:String;
    zipcode:number;
    apt:String;
    

    constructor(addressId:number, street:String, city:String, state:String, zipcode:number, apt:String) {
             this.addressId = addressId;
             this.street = street;
             this.city = city;
             this.state = state;
             this.zipcode = zipcode;
             this.apt = apt;
             
         }

}