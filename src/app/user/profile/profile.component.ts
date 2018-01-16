import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  fileData: FileHolder;
  constructor(private userService: UserService) { }

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
    console.log('done',file);
    this.fileData = file;
  }

  uploadImg(){
      this.userService.uploadImage(this.fileData).subscribe(data => console.log('upload..', data));
  }

}
