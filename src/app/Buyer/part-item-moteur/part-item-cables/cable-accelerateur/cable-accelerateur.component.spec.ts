import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CableAccelerateurComponent } from './cable-accelerateur.component';

describe('CableAccelerateurComponent', () => {
  let component: CableAccelerateurComponent;
  let fixture: ComponentFixture<CableAccelerateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CableAccelerateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CableAccelerateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
