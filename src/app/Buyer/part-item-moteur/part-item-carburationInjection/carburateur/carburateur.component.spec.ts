import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarburateurComponent } from './carburateur.component';

describe('CarburateurComponent', () => {
  let component: CarburateurComponent;
  let fixture: ComponentFixture<CarburateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarburateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarburateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
