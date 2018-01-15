import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User} from '../models/user.model';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import {LoginResultFormat} from '../models/success_data.model';


@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  private userTySupebject = new ReplaySubject<boolean>(1);
  public userType = this.userTySupebject.asObservable();

  private isEmployerSubject = new ReplaySubject<boolean>(1);
  public isEmployer = this.isEmployerSubject.asObservable();

  constructor (
    private apiService: ApiService,
    private jwtService: JwtService,
    private router: Router,
    private location: Location
  ) {}

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    console.log('populating showing token: ', this.jwtService.getToken());
    if (this.jwtService.getToken()) {
      this.apiService.get('/users')
      .subscribe(
        data => {
          console.log('poplulate data => ', data.data);
          this.setAuth(data.data.user, this.jwtService.getToken().toString());
          this.router.navigateByUrl(this.location.path());
        },
        err => {
          console.log('error populating', err);
          this.purgeAuth();
        }
      );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: User, token: string= null) {
    // Save JWT sent from server in localstorage
    if (token !== null) {
      this.jwtService.saveToken(token);
    }
    console.log('setting user', user);

    console.log('new token set', token);
    // Set current user data into observablet
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
    if (user !==undefined && user.userable_type !== undefined && user.userable_type.toLowerCase().includes('employer')) {
        this.isEmployerSubject.next(true);
        // console.log('em true');
    }else if  (user.userable_type!==undefined && user.userable_type.toLowerCase().includes('seeker')) {
      this.isEmployerSubject.next(false);
      // console.log('seek true');
    }
    // console.log('done true',user.userable_type,user['user']);
  }

  purgeAuth() {
    console.log('removing   user');
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next(new User());
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
    this.router.navigateByUrl('login');
  }


  attemptAuth(credentials): Observable<LoginResultFormat> {
    return this.apiService.post('/login', credentials)
    .map(
      res => {
        console.log('attempt login response ', res);
        this.setAuth(res.data.user, res.data.token);
        return res;
      }
    );
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // Create the user on the server (email, pass, etc)
  create(obj): Observable<LoginResultFormat> {
    return this.apiService
    .post('/register', obj )
    .map(data => {
      return data;
    });
  }

  apply(data: Object){
    return this.apiService.post('/apply',data);
  }

  searchEmail(terms: Observable<string>) {
    return terms
      .debounceTime(400)
      .filter( value => (value.trim()).length > 0)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    // return this.http
    //     .get(this.baseUrl + this.queryUrl + term)
    //     .map(res => res.json());
    return this.apiService.get('/email/check/' + term);
  }

  // Update the user on the server (email, pass, etc)
  update(user): Observable<User> {
    return this.apiService
    .put('/user', { user })
    .map(data => {
      // Update the currentUser observable
      this.currentUserSubject.next(data.user);
      return data.user;
    });
  }

}
