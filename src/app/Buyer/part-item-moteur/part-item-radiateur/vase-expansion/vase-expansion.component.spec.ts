import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaseExpansionComponent } from './vase-expansion.component';

describe('VaseExpansionComponent', () => {
  let component: VaseExpansionComponent;
  let fixture: ComponentFixture<VaseExpansionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaseExpansionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaseExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
