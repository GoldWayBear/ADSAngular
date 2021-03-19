import { Component, OnInit } from '@angular/core';
import {DasUserService} from '../auth_service/das-user.service';
import {TokenStorageService} from '../auth_service/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-patient',
  templateUrl: './user-patient.component.html',
  styleUrls: ['./user-patient.component.css']
})
export class UserPatientComponent implements OnInit {
  content?:string;
  constructor(private userService: DasUserService,
            private tokenStorageService: TokenStorageService,
            private router:Router) { }

  ngOnInit(): void {
    //this.userService.getUserDoctor().subscribe(
    this.userService.getUserPatien().subscribe(
      data =>{
        console.log(data);
        this.content = data;
      },
      err=>{
        this.content = JSON.parse(err.error).message;
      }
    )
  }

  logout(): void {
    this.tokenStorageService.logOut();
    window.location.reload();
    this.router.navigate(['/login']); // navigate to login page
  }
}
