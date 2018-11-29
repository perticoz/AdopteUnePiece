import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CableEmbrayageComponent } from './cable-embrayage.component';

describe('CableEmbrayageComponent', () => {
  let component: CableEmbrayageComponent;
  let fixture: ComponentFixture<CableEmbrayageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CableEmbrayageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CableEmbrayageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
