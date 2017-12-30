import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {FormDataService} from '../shared/services/form-data.service';
@Injectable()
export class SndStepAuthResolverService implements Resolve<boolean>  {

  constructor(
    private formData: FormDataService,
    private router: Router
  ) { }


  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.formData.secondStep$
      .map(data => data)
      .do(data => {
        console.log('resolver data', data);
      })
      .catch((err) => this.router.navigateByUrl('/'));

  }

}
