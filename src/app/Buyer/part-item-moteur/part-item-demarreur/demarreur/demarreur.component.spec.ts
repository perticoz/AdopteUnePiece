import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemarreurComponent } from './demarreur.component';

describe('DemarreurComponent', () => {
  let component: DemarreurComponent;
  let fixture: ComponentFixture<DemarreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemarreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemarreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
