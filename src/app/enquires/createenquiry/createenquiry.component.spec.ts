import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateenquiryComponent } from './createenquiry.component';

describe('CreateenquiryComponent', () => {
  let component: CreateenquiryComponent;
  let fixture: ComponentFixture<CreateenquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateenquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
