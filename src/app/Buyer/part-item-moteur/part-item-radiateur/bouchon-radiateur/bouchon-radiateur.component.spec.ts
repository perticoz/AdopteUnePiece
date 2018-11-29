import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouchonRadiateurComponent } from './bouchon-radiateur.component';

describe('BouchonRadiateurComponent', () => {
  let component: BouchonRadiateurComponent;
  let fixture: ComponentFixture<BouchonRadiateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouchonRadiateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouchonRadiateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
