import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth_service/auth.service';
import {User} from '../models/user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  users: User[] = [];
  constructor(private authService: AuthService) {  }

  ngOnInit(): void {
    this.findAllUsers();
    console.log(this.users[0].username);
    console.log(this.users[0].profilepicture);

    //let image = document.getElementById("image");
		//image.setAttribute("src", "data:image/jpeg;base64," +this.users[0].profilepicture);
  }

  formatImage(img: any): any {
    return 'data:image/jpeg;base64,' + img;
}
  findAllUsers(){
    this.authService.findAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      () => {
        console.log("Ooops! Something went wrong!");
      }
    )
  }
}
