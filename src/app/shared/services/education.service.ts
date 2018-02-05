import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
@Injectable()
export class EducationService {

  constructor(private apiService: ApiService) { }


  public add(obj: Object){
        return  this.apiService.post('/education',obj);
  }

}
