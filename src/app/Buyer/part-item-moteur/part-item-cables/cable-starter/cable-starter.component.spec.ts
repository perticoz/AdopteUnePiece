import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CableStarterComponent } from './cable-starter.component';

describe('CableStarterComponent', () => {
  let component: CableStarterComponent;
  let fixture: ComponentFixture<CableStarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CableStarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CableStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
