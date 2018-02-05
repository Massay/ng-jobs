import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import {Job} from '../models/job.model';

@Injectable()
export class JobService {

  private currentJobsSubject = new BehaviorSubject<Job>(new Job());
  public currentJobs$ = this.currentJobsSubject.asObservable().distinctUntilChanged();

  constructor(private apiService: ApiService, private jwtService: JwtService) {
   }

   setCurrent(data){
      this.currentJobsSubject.next(data);
   }

   getAll(){
      return this.apiService.get('/jobs');
   }

   get(id){
      return this.apiService.get('/jobs/'+id);
   }

   create(obj): Observable<Job> {
     return this.apiService
     .post('/jobs', obj )
     .map(data => {
       return data;
     });
   }

}
