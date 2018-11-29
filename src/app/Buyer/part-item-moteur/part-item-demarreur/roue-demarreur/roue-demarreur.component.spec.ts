import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoueDemarreurComponent } from './roue-demarreur.component';

describe('RoueDemarreurComponent', () => {
  let component: RoueDemarreurComponent;
  let fixture: ComponentFixture<RoueDemarreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoueDemarreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoueDemarreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
