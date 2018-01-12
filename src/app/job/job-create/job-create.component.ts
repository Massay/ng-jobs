import { Component, OnInit,  OnChanges, SimpleChanges, SimpleChange,ChangeDetectionStrategy } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators,FormArray} from '@angular/forms';
import {LevelService} from '../../shared/services/level.service';
import {TypeService} from '../../shared/services/type.service';
import {StatusService} from '../../shared/services/status.service';
import {Type} from '../../shared/models/type.model';
import {Status} from '../../shared/models/status.model';
import {Level} from '../../shared/models/level.model';
import {JobService} from '../../shared/services/job.service';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css']
})
export class JobCreateComponent implements OnInit {
  closeResult: string;
  fg: FormGroup;
  public loading = true;
  public myForm: FormGroup; // our form model
  statues: Status[];
  levels: Level[];
  types: Type[];
  changelog: string[] = [];
  list:[{
     name: string
  }];
  constructor(private modalService: NgbModal,private jobService: JobService, private _fb: FormBuilder,
    private fb:FormBuilder, private levelService: LevelService, private statusService: StatusService,
     private typeService: TypeService) {
          this.fg = this.fb.group({
            'title':[null, Validators.required],
            'summary': [null, Validators.required],
            'type_id':[null, Validators.required],
            'level_id':[null, Validators.required],
            'price': [null, Validators.compose([Validators.required, Validators.min(0),Validators.max(99999999999999)])],
            'closing_date': [null, Validators.required]
          });
        this.myForm = this._fb.group({

                addresses: this._fb.array([
                    this.initDescription(),
                ])
            });
    }



  ngOnInit() {
          this.myForm.valueChanges.subscribe((form) => {
          console.log('form changes ',form);
          this.list = form.addresses;
          });
         this.typeService.getAll().subscribe( data => this.types= data);
         this.levelService.getAll().subscribe( data => this.levels = data);
         this.statusService.getAll().subscribe( data => this.statues = data);

     // we will initialize our form here
     console.log('job Creation init');

  }

  ngOnChanges(changes: SimpleChanges) {
       this.loading = false;
       console.log('job create OnChanges');
       console.log(JSON.stringify(changes));
       for (const propName in changes) {
            const change = changes[propName];
            const to  = JSON.stringify(change.currentValue);
            const from = JSON.stringify(change.previousValue);
            const changeLog = `${propName}: changed from ${from} to ${to} `;
            this.changelog.push(changeLog);
       }
   }
  initDescription() {
        // initialize our address
        return this._fb.group({
            name: ['', Validators.required],
        });
    }

addDescription() {
    // add address to the list
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initDescription());
}

removeDescription(i: number) {
    // remove address from the list
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
}
save(model: any) {
       // call API to save customer
       console.log('saved data',model.value);
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
   console.log('list of Description', this.myForm.value);
   console.log('list of Description is valid', this.myForm.valid);
   if(!this.fg.invalid){
       console.log('job creation is valid ', this.fg.value);
       this.jobService.create(this.fg.value).subscribe( data => {
          console.log('data is ', data);
       }, err => {
          console.log('erro is', err);
       } )
   }else{
       console.log('job creation is invalid', this.fg.value);
   }

 }

}
