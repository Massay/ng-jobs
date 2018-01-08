import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../shared/models/job.model';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})
export class JobItemComponent implements OnInit {
  @Input() job: Job;
  @Output() onJobSelected: EventEmitter<Job>;
  constructor() { 
    this.onJobSelected = new EventEmitter();
  }

  ngOnInit() {
  }


  Jobselect(job: Job){
    this.onJobSelected.emit(job);
  }

  

}
