import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobItemListComponent } from './job-item-list.component';

describe('JobItemListComponent', () => {
  let component: JobItemListComponent;
  let fixture: ComponentFixture<JobItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
