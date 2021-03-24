import { User } from "./user";

export class Bill{
    invoiceId:number;
    user:User;
    total:number;
    date:Date;
    dueDate:Date;
    

    constructor(invoiceId:number, user:User, total:number, date:Date, dueDate:Date) {
             this.invoiceId = invoiceId;
             this.user = user;
             this.total = total;
             this.date = date;
             this.dueDate = dueDate;
             
         }

}