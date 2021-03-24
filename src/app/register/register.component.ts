import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth_service/auth.service';
import { User } from '../models/user';
import {Address} from '../models/address';

/*
class User{
  username:string;
  email:string;
  password:string;
  role:string;

  constructor( username:string,email:string,password:string,role:string){
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
*/

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null,
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  selectedFile:File = null;
   // On file Select 
   onFileSelected(event) { 
    console.log(event);
    this.selectedFile = event.target.files[0]; 
  } 

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password} = this.form;
    let role: string = 'patient';
    
    const addr = <Address>{}; 
    const dob = new Date();
    let user:User = new User(1,username,  password, '', '','','',email,987654321,addr,dob,role);
    console.log(user);
    //console.log(imageUpload.name);

    let formData = new FormData();
    //this.uploadForm.get('profile').value
    formData.append("image", this.selectedFile,this.selectedFile.name);
    //formData.append("image", imageUpload);

    /*
    formData.append('user', new Blob([JSON.stringify(user)], {
          type: "multipart/form-data"
      }));
    */
    formData.append('user', JSON.stringify(user));
      
  this.authService.register(formData).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
