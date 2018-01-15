import { Component, OnInit,  OnChanges, SimpleChanges, SimpleChange,ChangeDetectionStrategy  } from '@angular/core';
import {JobSeekerService} from '../../shared/services/job-seeker.service';
import {User} from '../../shared/models/user.model';
@Component({
  selector: 'app-job-seeker-main',
  templateUrl: './job-seeker-main.component.html',
  styleUrls: ['./job-seeker-main.component.css']
})
export class JobSeekerMainComponent implements OnInit {
  users: User[];
  selectedSeeker: User;
  constructor(private jobSeekerService: JobSeekerService) { }

  ngOnInit() {
      this.jobSeekerService.getAllSeekers().subscribe (  data =>{
        this.users = data.data.users;
        console.log(' list of users ', data);
              this.selectedSeeker = this.users[0];
      }  ); 
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges job-seeker');
      if(this.users && this.users.length>0){
            this.selectedSeeker = this.users[0];
      }
  }
  selectJobSeeker(d:any){
    console.log('job seeker data ', d);
    this.selectedSeeker = d;
  }  

}
