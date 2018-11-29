import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceMoteurDetailComponent } from './piece-moteur-detail.component';

describe('PieceMoteurDetailComponent', () => {
  let component: PieceMoteurDetailComponent;
  let fixture: ComponentFixture<PieceMoteurDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieceMoteurDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceMoteurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
