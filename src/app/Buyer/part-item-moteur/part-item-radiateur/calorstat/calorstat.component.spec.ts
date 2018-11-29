import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorstatComponent } from './calorstat.component';

describe('CalorstatComponent', () => {
  let component: CalorstatComponent;
  let fixture: ComponentFixture<CalorstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalorstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
