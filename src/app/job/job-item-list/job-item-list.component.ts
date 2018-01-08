import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../shared/models/job.model';

@Component({
  selector: 'app-job-item-list',
  templateUrl: './job-item-list.component.html',
  styleUrls: ['./job-item-list.component.css']
})
export class JobItemListComponent implements OnInit {
@Input() jobs: Job[];
@Output() selectedJob = new EventEmitter<Job>();
  constructor() { 
      this.selectedJob = new EventEmitter();
  }

  ngOnInit() {
  }

  selectJob(job: Job){
        console.log(' job is ', job);
  }

  pickFromList(job: Job){
    this.selectedJob.emit(job);
  }

}
