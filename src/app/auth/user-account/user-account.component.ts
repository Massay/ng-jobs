import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';

import {FormDataService} from '../../shared/services/form-data.service';


import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css'],
  providers: [NgbTabsetConfig]
})
export class UserAccountComponent implements OnInit {

  fg: FormGroup;
  fData: any;
  addresses: any[];
  loading: boolean;
  notify: boolean;
  message: string;
  constructor(
    private fb: FormBuilder,
    private formData: FormDataService,
    private userService: UserService,
    config: NgbTabsetConfig
  ) {
    config.justify = 'center';
    config.type = 'pills';
    config.orientation = 'horizontal';
    this.loading = false;
   }

  ngOnInit() {
    this.addresses = [
      {
        name: 'Banjul'
      },
      {
        name: 'Serrekunda'
      },
      {
        name: 'Brusubi'
      },
      {
        name: 'Farato'
      },
      {
        name: 'Bakau'
      },
      {
        name: 'Tabokoto'
      },
      {
        name:'Yumdum'
      }
    ]
    this.fData = this.formData.getPersonal();
    this.fg = this.fb.group({
      'address': [null, Validators.required],
      'password': [null, Validators.required],
      'c_password': [null, Validators.required],
      'user_type': 1,
      'terms_check': [false, Validators.required],
      'notifications_check': [false, Validators.required]
    });
    this.fg.addControl('employer_name', new FormControl());
    this.fg.controls['employer_name'].setValue(this.fData.firstname + ' ' + this.fData.lastname);
  }

  public beforeChange($event: NgbTabChangeEvent) {
    console.log('cha....');
    if (+$event.nextId === 1) {
         this.fg.controls['user_type'].setValue(1);
         this.fg.removeControl('username');
       // $event.preventDefault();
    }
    if (+$event.nextId === 2) {
      this.fg.controls['user_type'].setValue(2);
      this.fg.removeControl('employer_name');
      this.fg.addControl('username', new FormControl());
    // $event.preventDefault();
 }
  }

  register() {
    this.loading = true;
    this.notify = false;
    this.fg.addControl('name', new FormControl());
    this.fg.controls['name'].setValue(this.fData.firstname + ' ' + this.fData.lastname);
    this.fg.addControl('email', new FormControl());
    this.fg.controls['email'].setValue(this.fData.email);
    this.fg.controls['c_password'].setValue(this.fg.controls['password'].value);
    console.log('value is ', this.fg.value);
    this.userService.create(this.fg.value).subscribe( data => {
      console.log('register completed success result ', data);
      this.loading = false;
      this.notify = true;
      this.message ='Account Successfully created';
    }, err => {
       this.loading = false;
       this.notify = true;
       this.message ='We have an error.Account not created. ';
       console.log('register completed error result ', err);
    });
  }

  selected(val) {
    this.fg.controls['user_type'].setValue(val);
  }
}
