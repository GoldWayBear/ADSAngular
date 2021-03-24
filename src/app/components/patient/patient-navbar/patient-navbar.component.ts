import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth_service/token-storage.service';

@Component({
  selector: 'app-patient-navbar',
  templateUrl: './patient-navbar.component.html',
  styleUrls: ['./patient-navbar.component.css']
})
export class PatientNavbarComponent implements OnInit {

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
