import { Component, OnInit } from '@angular/core';
import {UserService} from './shared/services/user.service';
import { JobService } from "./shared/services/job.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {


  title = 'app';

  constructor(private userService: UserService, private jobService: JobService){

  }

  ngOnInit() {

    this.userService.populate();

    this.jobService.getAll().subscribe( data => {
        this.jobService.setCurrent(data);
    } )

  }


}
