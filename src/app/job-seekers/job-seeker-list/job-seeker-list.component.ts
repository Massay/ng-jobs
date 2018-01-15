import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-job-seeker-list',
  templateUrl: './job-seeker-list.component.html',
  styleUrls: ['./job-seeker-list.component.css']
})
export class JobSeekerListComponent implements OnInit {
 @Input() users: User;
 @Output() selectedSeeker = new EventEmitter<User>();
 private selectedUser: User;
  constructor() { 
    
  }

  ngOnInit() {
       
  }
  selected(user:User){
    this.selectedUser  = user;
       this.selectedSeeker.emit(user);
  }
}
