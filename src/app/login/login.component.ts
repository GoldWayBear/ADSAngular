import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth_service/auth.service';
import {TokenStorageService} from '../auth_service/token-storage.service';
import {Router} from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : any = {
    username:null,
    password:null
  }
  isLoggedIn:boolean = false;
  isLoginFailed:boolean = false;

  /*
  isPatientIn:boolean = false;
  isDoctorIn:boolean = false;
  isAdminIn:boolean = false;
  */
  errorMessage:string = '';
  roles:string[] = [];

  constructor(private authService:AuthService,
          private tokenStorage:TokenStorageService,
          private route:Router
          ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      for(var role of this.roles){
        if(role == 'ROLE_DOCTOR'){
          this.route.navigate(['/doctor']); // navigate to other page
        }else if(role == 'ROLE_ADMIN'){
          this.route.navigate(['/admin']); // navigate to other page
        }else{
          this.route.navigate(['/patient']); // navigate to other page
        }
        break;
      }      
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
      
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        console.log('accessToken:'+ data.accessToken);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        for(var role of this.roles){
          if(role == 'ROLE_DOCTOR'){
            this.route.navigate(['/doctor']); // navigate to other page
          }else if(role == 'ROLE_ADMIN'){
            this.route.navigate(['/admin']); // navigate to other page
          }else{
            this.route.navigate(['/patient']); // navigate to other page
          }
          break;
        }

        //this.route.navigate(['/patient']); // navigate to other page
        this.reloadPage();

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  public reloadPage():void{
    window.location.reload();
  }
}
