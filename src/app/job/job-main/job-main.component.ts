import { Component, OnInit } from '@angular/core';
import { Job } from '../../shared/models/job.model';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'app-job-main',
  templateUrl: './job-main.component.html',
  styleUrls: ['./job-main.component.css']
})
export class JobMainComponent implements OnInit {
  currentSelectedJob: Job;
   jobs: Job[] = [
     {
          title: 'This is a job',
          closing_date: '7-01-2018',
          id: 1,
          status: null,
          price: 8000,
          categories: [],
          created_at:'9-01-2018',
          level: null,
          level_id: 1,
          status_id: 2,
          summary: 'summary',
          type: null,
          type_id: 1
     },
     {
          title: 'This is a job 2',
          closing_date: '7-01-2018',
          id: 2,
          status: null,
          price: 8000,
          categories: [],
          created_at:'9-01-2018',
          level: null,
          level_id: 1,
          status_id: 2,
          summary: 'summary 2',
          type: null,
          type_id: 1
 }
   ];
  constructor() { }

  ngOnInit() {
    if(this.jobs.length>1)
        this.currentSelectedJob = this.jobs[0];
  }

  selectJob(job: Job){
    this.currentSelectedJob = job;
    console.log('selected jj is ', job);
  }

}
