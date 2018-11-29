import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoteurCompletComponent } from './moteur-complet.component';

describe('MoteurCompletComponent', () => {
  let component: MoteurCompletComponent;
  let fixture: ComponentFixture<MoteurCompletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoteurCompletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoteurCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
