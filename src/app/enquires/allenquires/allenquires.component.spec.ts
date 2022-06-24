import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllenquiresComponent } from './allenquires.component';

describe('AllenquiresComponent', () => {
  let component: AllenquiresComponent;
  let fixture: ComponentFixture<AllenquiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllenquiresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllenquiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
