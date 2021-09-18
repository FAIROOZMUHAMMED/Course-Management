import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedStudentsComponent } from './applied-students.component';

describe('AppliedStudentsComponent', () => {
  let component: AppliedStudentsComponent;
  let fixture: ComponentFixture<AppliedStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
