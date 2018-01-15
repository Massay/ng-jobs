import { Component, OnInit ,Input} from '@angular/core';
import {User} from '../../shared/models/user.model';
@Component({
  selector: 'app-job-seeker-item',
  templateUrl: './job-seeker-item.component.html',
  styleUrls: ['./job-seeker-item.component.css']
})
export class JobSeekerItemComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
