import { Component, OnInit, Input, Output, EventEmitter ,OnChanges, SimpleChanges, SimpleChange,ChangeDetectionStrategy} from '@angular/core';
import { Job } from '../../shared/models/job.model';

@Component({
  selector: 'app-job-item-list',
  templateUrl: './job-item-list.component.html',
  styleUrls: ['./job-item-list.component.css']
})
export class JobItemListComponent implements OnInit {
@Input() jobs: Job[];
@Output() selectedJob = new EventEmitter<Job>();
currentJob: Job;
public loading;
  changelog: string[] = [];
  constructor() {
      //this.selectedJob = new EventEmitter();

  }

  ngOnInit() {
      this.loading = true;
     //  this.currentJob = this.jobs[0];
  }

  selectJob(job: Job){
        console.log(' job is ', job);
  }

  pickFromList(job: Job){
    this.currentJob = job;
    this.selectedJob.emit(job);
  }

  ngOnChanges(changes: SimpleChanges) {
       this.loading = false;
       console.log('OnChanges');
       if(this.jobs && this.jobs.length > 0 ){
        this.currentJob = this.jobs[0];
}
       
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
