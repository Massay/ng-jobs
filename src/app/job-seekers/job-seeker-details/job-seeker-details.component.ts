import { Component, OnInit  , Input} from '@angular/core';
import {User} from '../../shared/models/user.model';
@Component({
  selector: 'app-job-seeker-details',
  templateUrl: './job-seeker-details.component.html',
  styleUrls: ['./job-seeker-details.component.css']
})
export class JobSeekerDetailsComponent implements OnInit {
 @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
