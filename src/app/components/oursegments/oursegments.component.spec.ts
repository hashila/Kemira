import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OursegmentsComponent } from './oursegments.component';

describe('OursegmentsComponent', () => {
  let component: OursegmentsComponent;
  let fixture: ComponentFixture<OursegmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OursegmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OursegmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
