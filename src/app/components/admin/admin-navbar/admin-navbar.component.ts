import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth_service/token-storage.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService,
    private router:Router) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.tokenStorageService.logOut();
    window.location.reload();
    this.router.navigate(['/login']); // navigate to login page
  }
}
