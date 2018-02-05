import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";

@Injectable()
export class ExperienceService {

  constructor(private apiService: ApiService) { }

  add(obj: Object){
    return this.apiService.post('/experiences', obj);
  }

}
