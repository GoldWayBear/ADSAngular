import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth_service/token-storage.service';

@Component({
  selector: 'app-doctor-navbar',
  templateUrl: './doctor-navbar.component.html',
  styleUrls: ['./doctor-navbar.component.css']
})
export class DoctorNavbarComponent implements OnInit {

  constructor(    
    private tokenStorageService: TokenStorageService,
    private router:Router) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.tokenStorageService.logOut();
    window.location.reload();
    this.router.navigate(['/login']); // navigate to login page
  }
}
