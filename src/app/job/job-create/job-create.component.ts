import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { LevelService } from '../../shared/services/level.service';
import { TypeService } from '../../shared/services/type.service';
import { StatusService } from '../../shared/services/status.service';
import { CategoryService } from '../../shared/services/category.service';
import { Type } from '../../shared/models/type.model';
import { Status } from '../../shared/models/status.model';
import { Level } from '../../shared/models/level.model';
import { Category } from '../../shared/models/category.model';
import { JobService } from '../../shared/services/job.service';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css']
})
export class JobCreateComponent implements OnInit {
  closeResult: string;
  fg: FormGroup;
  public loading = false;
  public myForm: FormGroup; // our form model
  statues: Status[];
  levels: Level[];
  types: Type[];
  categories: Category[];
  changelog: string[] = [];
  list: any[];
  constructor(private modalService: NgbModal, private jobService: JobService, private _fb: FormBuilder,
    private fb: FormBuilder, private levelService: LevelService, private statusService: StatusService,
    private typeService: TypeService,private categoryService: CategoryService) {
    this.fg = this.fb.group({
      'title': [null, Validators.required],
      'summary': [null, Validators.required],
      'type_id': [null, Validators.required],
      'level_id': [null, Validators.required],
      'price': [null, Validators.compose([Validators.required, Validators.min(0), Validators.max(99999999999999)])],
      'closing_date': [null, Validators.required],
      'descriptions': [[]],
      'categories': [ null ]
    });
    this.myForm = this._fb.group({

      addresses: this._fb.array([
        this.initDescription(),
      ])
    });
  }



  ngOnInit() {
    this.categoryService.getAll().subscribe( data => this.categories = data );
    this.list = Array<any>();
    this.myForm.valueChanges.subscribe((form) => {
      console.log('form changes ', form);
      this.list = form.addresses;
    });
    this.typeService.getAll().subscribe(data => this.types = data);
    this.levelService.getAll().subscribe(data => this.levels = data);
    this.statusService.getAll().subscribe(data => this.statues = data);

    // we will initialize our form here
    console.log('job Creation init');

  }

  ngOnChanges(changes: SimpleChanges) {
    // this.loading = false;
    console.log('job create OnChanges');
    console.log(JSON.stringify(changes));
    for (const propName in changes) {
      const change = changes[propName];
      const to = JSON.stringify(change.currentValue);
      const from = JSON.stringify(change.previousValue);
      const changeLog = `${propName}: changed from ${from} to ${to} `;
      this.changelog.push(changeLog);
    }
  }
  initDescription() {
    // initialize our address
    return this._fb.group({
      body: ['', Validators.required],
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
    console.log('saved data', model.value);
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
      return `with: ${reason}`;
    }
  }
  createJob() {

    console.log('list of Description', this.list);
    console.log('list of Description is valid', this.myForm.valid);

    if (this.myForm.invalid && this.list.length <= 0) {
      const reply = confirm('You did not create any description for the Job.DO u want to proceed ?');
      if (!reply) {
        alert('anwer is no. Please create your descripions');
        return;
      }

    }
    this.loading = true;
    this.fg.controls['descriptions'].setValue(this.list);
    if (!this.fg.invalid) {
      console.log('job creation is valid ', this.fg.value);
      this.jobService.create(this.fg.value).subscribe(data => {
        console.log('data is ', data);
        this.loading = false;
      }, err => {
        console.log('erro is', err);
        this.loading = false;
      })
    } else {
      this.loading = false;
      console.log('job creation is invalid', this.fg.value);
    }


  }

}
