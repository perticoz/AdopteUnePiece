import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarterGaucheComponent } from './carter-gauche.component';

describe('CarterGaucheComponent', () => {
  let component: CarterGaucheComponent;
  let fixture: ComponentFixture<CarterGaucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarterGaucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarterGaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
