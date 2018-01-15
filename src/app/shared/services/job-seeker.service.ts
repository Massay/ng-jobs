import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import {Router} from '@angular/router';

@Injectable()
export class JobSeekerService {

  constructor (
    private apiService: ApiService,
    private jwtService: JwtService,
    private router: Router,
    private location: Location
  ) {}


  getAllSeekers(){
       return this.apiService.get('/seekers');
  }

}
