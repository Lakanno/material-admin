import { Component } from '@angular/core';
import { UserService } from 'src/app/pages/auth/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  constructor(private userService: UserService){
    this.getUsersData();

  }

  getUsersData(){
    this.userService.getUsers().subscribe((users)=>{
      console.log(users);
      
    })
  }

}
