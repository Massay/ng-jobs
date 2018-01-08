import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isEmployer: boolean;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
     this.userService.isEmployer.subscribe( data => {
      console.log('header user ', data); 
      this.isEmployer = data } );
  }

  signout() {
      this.userService.purgeAuth();
  }

}
