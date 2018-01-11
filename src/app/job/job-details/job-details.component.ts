import { Component, OnInit, Input,  OnChanges, SimpleChanges, SimpleChange,ChangeDetectionStrategy } from '@angular/core';
import { Job } from '../../shared/models/job.model';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  currentRate = 5;
  @Input() job: Job;
  changelog: string[] = [];
  public loading = true;
  constructor() {

  }

  ngOnInit() {
     console.log('Oninit');
     this.loading = true;
  }

  ngOnChanges(changes: SimpleChanges) {
       this.loading = false;
       console.log('OnChanges');
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
