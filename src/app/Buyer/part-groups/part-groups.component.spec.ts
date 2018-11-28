import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartGroupsComponent } from './part-groups.component';

describe('PartGroupsComponent', () => {
  let component: PartGroupsComponent;
  let fixture: ComponentFixture<PartGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
