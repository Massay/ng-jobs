import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
@Injectable()
export class TypeService {

    constructor(private apiService: ApiService, private jwtService: JwtService) { }


    getAll(){
      return this.apiService.get('/types');
    }

}
