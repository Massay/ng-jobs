import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobResumesIconCardListComponent } from './job-resumes-icon-card-list.component';

describe('JobResumesIconCardListComponent', () => {
  let component: JobResumesIconCardListComponent;
  let fixture: ComponentFixture<JobResumesIconCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobResumesIconCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobResumesIconCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
