import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarterDroitComponent } from './carter-droit.component';

describe('CarterDroitComponent', () => {
  let component: CarterDroitComponent;
  let fixture: ComponentFixture<CarterDroitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarterDroitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarterDroitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
