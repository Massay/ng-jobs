import { Component, OnInit, Input,  OnChanges, SimpleChanges, SimpleChange,ChangeDetectionStrategy } from '@angular/core';
import { Job } from '../../shared/models/job.model';
import {User} from '../../shared/models/user.model';
import {UserService} from '../../shared/services/user.service';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  currentRate = 5;
  @Input() job: Job;
  changelog: string[] = [];
  currentUser: User;
  public loading = true;
  constructor(private userService: UserService) {

  }

  ngOnInit() {
     console.log('Oninit');
     this.userService.currentUser.subscribe ( user => {
         this.currentUser = user;
         console.log('current logged in user',user);
     } ) 
     this.loading = true;
  }
  jobAppRequest(data){
    return this.userService.apply(data);
  }

  apply(id){
    this.userService.isAuthenticated.take(1).subscribe( data => {
       if(data){
         alert('you are authenticated');
         this.jobAppRequest({
           user_id: this.currentUser.id,
           job_id: id
         }).subscribe( data => {
             console.log('job application done', data);
         } )
       }else{
         alert('you are not authenticated');
       }

    } )
     console.log('applied for ', this.job);
  }

  save(){
    this.userService.isAuthenticated.take(1).subscribe( data => {
      if(data){
        alert('Job saved.You are authenticated')
      }else{
        alert('Job Not saved.You are not authenticated');
      }

   } )
  }

  ngOnChanges(changes: SimpleChanges) {
       this.loading = false;
       console.log('job details OnChanges', this.job);
       console.log(JSON.stringify(changes));
       for (const propName in changes) {
            const change = changes[propName];
            const to  = JSON.stringify(change.currentValue);
            const from = JSON.stringify(change.previousValue);
            const changeLog = `${propName}: changed from ${from} to ${to} `;
            this.changelog.push(changeLog);
       }
   }

}
