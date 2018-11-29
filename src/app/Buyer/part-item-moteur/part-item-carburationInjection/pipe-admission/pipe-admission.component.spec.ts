import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeAdmissionComponent } from './pipe-admission.component';

describe('PipeAdmissionComponent', () => {
  let component: PipeAdmissionComponent;
  let fixture: ComponentFixture<PipeAdmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeAdmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
