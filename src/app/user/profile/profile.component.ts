import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';
import { HttpHeaders, HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { JwtService } from '../../shared/services/jwt.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  fileData: any;

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      // 'Content-Type': 'application/json',
      // 'Accept': 'application/json'
    };

    if (this.jwtService.getToken()) {
         headersConfig['Authorization'] = `Bearer ${this.jwtService.getToken()}`;
    }
    return new HttpHeaders(headersConfig);
  }

  constructor(private userService: UserService, private http: HttpClient,
    private jwtService: JwtService) { }

  ngOnInit() {

       this.userService.currentUser.subscribe( data => this.user = data  );
  }

  imageFinishedUploading(file) {
    console.log('image_finished_upload', file);
  }

  onRemoved(file) {
    console.log('removed ',file);
    // do some stuff with the removed file.
  }

  onUploadStateChanged(state: boolean) {
    console.log(JSON.stringify(state));
  }

  onUploadFinished(file){
    console.log('done',file.file);
    this.fileData = file.file;
  }

  uploadImg(){
      const formData = new FormData();

      formData.append('avatar',this.fileData);
      this.http.post( `${environment.app_url}${'/uploadImage'}`,formData,{
        headers: this.setHeaders()
      }).subscribe( d => {
           console.log('uploading file ', d);
      } );
      // this.userService.uploadImage(formData).subscribe(data => console.log('uploading..', data));
  }

}
