import { Component, OnInit } from '@angular/core';
import { Job } from '../../shared/models/job.model';
import { Type } from '../../shared/models/type.model';
import { Category } from '../../shared/models/category.model';
import {JobService} from '../../shared/services/job.service';
import {TypeService} from '../../shared/services/type.service';
import {CategoryService} from '../../shared/services/category.service';
@Component({
  selector: 'app-job-master',
  templateUrl: './job-master.component.html',
  styleUrls: ['./job-master.component.css']
})
export class JobMasterComponent implements OnInit {
  jobs: Job[];
  types: Type;
  categories: Category;
  constructor(private jobService: JobService, private typeService: TypeService, 
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.typeService.getAll().subscribe( data => this.types = data );
    this.categoryService.getAll().subscribe( data => {
        console.log('list of categories ', data);
        this.categories = data;
    })
  }

}
