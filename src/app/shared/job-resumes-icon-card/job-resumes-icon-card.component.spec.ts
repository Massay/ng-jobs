import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobResumesIconCardComponent } from './job-resumes-icon-card.component';

describe('JobResumesIconCardComponent', () => {
  let component: JobResumesIconCardComponent;
  let fixture: ComponentFixture<JobResumesIconCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobResumesIconCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobResumesIconCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
