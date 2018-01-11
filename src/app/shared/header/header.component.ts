import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../models/user.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isEmployer: boolean;
  user: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
     this.userService.isEmployer.subscribe( data => {
      console.log('header user ', data);
      this.isEmployer = data } );
      this.userService.currentUser.subscribe ( data => this.user = data);
  }

  signout() {
      this.userService.purgeAuth();
  }

}
