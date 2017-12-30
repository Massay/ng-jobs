import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormDataService } from '../../shared/services/form-data.service';
import { Subject } from 'rxjs/Subject';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fg: FormGroup;
  results: Object;

  searchTerm$ = new Subject<string>();
  emailvalid: boolean;

  constructor(
    private router: Router,
    private formdata: FormDataService,
    private userService: UserService,
    private fb: FormBuilder) {

      this.searchTerm$.subscribe(data => {
        console.log('actual val  ', data);
      });

    this.userService.searchEmail(this.searchTerm$)
      .subscribe(results => {
        console.log('hello me ', results);
        this.results = results;
        if (results['data'].result.length > 0) {
          console.log('email is being used');
          this.emailvalid = false;
        }else {
          console.log('email is not being used');
          this.emailvalid = true;
        }
      });

  }

  ngOnInit() {
    this.fg = this.fb.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'email': [null, Validators.compose([Validators.email, Validators.required])]
    });
  }
  // hello(value) {
  //   console.log('hello', value);
  //   this.searchTerm$.next(value);
  // }
  createAccount() {
    console.log('form data', this.fg.value);
    this.formdata.setPersonal(this.fg.value);
    this.router.navigateByUrl('complete');
  }
}
