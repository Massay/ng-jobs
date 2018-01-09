import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css']
})
export class JobCreateComponent implements OnInit {
  closeResult: string;
  fg: FormGroup;
  constructor(private modalService: NgbModal, private fb:FormBuilder) {
      this.fg = this.fb.group({
        'title':[null, Validators.required],
        'summary': [null, Validators.required],
        'type_id':[null, Validators.required],
        'level_id':[null, Validators.required],
        'price': [null, Validators.required],
        'closing_date': [null, Validators.required]
      });
  }

  ngOnInit() {
  }

  open(content) {
   this.modalService.open(content).result.then((result) => {
     this.closeResult = `Closed with: ${result}`;
   }, (reason) => {
     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   });
 }

 private getDismissReason(reason: any): string {
   if (reason === ModalDismissReasons.ESC) {
     return 'by pressing ESC';
   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
     return 'by clicking on a backdrop';
   } else {
     return  `with: ${reason}`;
   }
 }
 createJob(){
   console.log('job creation details', this.fg.value);
 }

}
