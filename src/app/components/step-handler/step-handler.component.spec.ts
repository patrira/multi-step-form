import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepHandlerComponent } from './step-handler.component';

describe('StepHandlerComponent', () => {
  let component: StepHandlerComponent;
  let fixture: ComponentFixture<StepHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepHandlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
