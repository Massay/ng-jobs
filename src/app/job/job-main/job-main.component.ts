import { Component, OnInit } from '@angular/core';
import { Job } from '../../shared/models/job.model';
import { Type } from '../../shared/models/type.model';
import { Category } from '../../shared/models/category.model';
import {JobService} from '../../shared/services/job.service';
import {TypeService} from '../../shared/services/type.service';

@Component({
  selector: 'app-job-main',
  templateUrl: './job-main.component.html',
  styleUrls: ['./job-main.component.css']
})
export class JobMainComponent implements OnInit {
  currentSelectedJob: Job;
   jobs: Job[];
   types: Type;
  constructor(private jobService: JobService, private typeService: TypeService) { }

  ngOnInit() {

      this.jobService.getAll().subscribe( data => {
        this.jobs = data;
        if(this.jobs.length > 0 ){
                this.currentSelectedJob = this.jobs[0];
        }
      }, err => {

      });
      this.typeService.getAll().subscribe( data => this.types = data );



  }

  selectJob(job: Job){
    this.currentSelectedJob = job;
    console.log('selected jj is ', job);
  }

}
