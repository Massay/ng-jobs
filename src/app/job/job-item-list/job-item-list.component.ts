import { Component, OnInit, Input, Output, EventEmitter ,
  ViewEncapsulation ,OnChanges, SimpleChanges, SimpleChange,ChangeDetectionStrategy} from '@angular/core';
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
  p: number = 1;
  constructor() {
      //this.selectedJob = new EventEmitter();

  }

  totalItems: number = 64;
  currentPage: number = 4;
  smallnumPages: number = 0;
 
  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
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
