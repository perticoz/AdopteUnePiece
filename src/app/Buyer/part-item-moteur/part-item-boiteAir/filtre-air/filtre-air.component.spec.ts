import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreAirComponent } from './filtre-air.component';

describe('FiltreAirComponent', () => {
  let component: FiltreAirComponent;
  let fixture: ComponentFixture<FiltreAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltreAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
