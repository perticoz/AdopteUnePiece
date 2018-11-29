import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuriteRefroidissementComponent } from './durite-refroidissement.component';

describe('DuriteRefroidissementComponent', () => {
  let component: DuriteRefroidissementComponent;
  let fixture: ComponentFixture<DuriteRefroidissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuriteRefroidissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuriteRefroidissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
