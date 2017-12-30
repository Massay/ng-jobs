import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';


@Injectable()
export class FormDataService {

  private secondStepValid = new ReplaySubject<boolean>(1);
  public secondStep$ = this.secondStepValid.asObservable();

  private personalData: any;


  constructor() {
    this.secondStepValid.next(false);
  }

  setPersonal(data: any) {
    this.secondStepValid.next(true);
    this.personalData = data;
  }

  getPersonal() {
    this.secondStepValid.next(false);
    return this.personalData;
  }

  isValidfirstStep() {
    if (this.personalData && this.personalData['email'] !== null) {
      return true;
    }
    return false;
  }

}
