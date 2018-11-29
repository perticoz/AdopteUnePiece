import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteAirComponent } from './boite-air.component';

describe('BoiteAirComponent', () => {
  let component: BoiteAirComponent;
  let fixture: ComponentFixture<BoiteAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiteAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
