import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxeMoteurComponent } from './axe-moteur.component';

describe('AxeMoteurComponent', () => {
  let component: AxeMoteurComponent;
  let fixture: ComponentFixture<AxeMoteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxeMoteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxeMoteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
