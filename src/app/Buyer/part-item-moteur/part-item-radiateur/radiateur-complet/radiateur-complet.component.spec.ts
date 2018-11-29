import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiateurCompletComponent } from './radiateur-complet.component';

describe('RadiateurCompletComponent', () => {
  let component: RadiateurCompletComponent;
  let fixture: ComponentFixture<RadiateurCompletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiateurCompletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiateurCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
