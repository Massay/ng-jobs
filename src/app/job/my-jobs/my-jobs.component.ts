import { Component, OnInit } from '@angular/core';
import { UserService } from "../../shared/services/user.service";
import { User } from "../../shared/models/user.model";

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent implements OnInit {
 user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
       this.userService.currentUser.subscribe( data => {
              console.log('my jobs');
              this.user = data;
       }, err => {
           console.log('my-jobs error', err);
       } )
  }

}
