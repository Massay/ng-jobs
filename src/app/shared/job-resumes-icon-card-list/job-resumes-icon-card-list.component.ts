import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-job-resumes-icon-card-list',
  templateUrl: './job-resumes-icon-card-list.component.html',
  styleUrls: ['./job-resumes-icon-card-list.component.css']
})
export class JobResumesIconCardListComponent implements OnInit {
  @Input() cardTotalPerCategory: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
