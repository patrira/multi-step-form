import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateHandlerComponent } from './date-handler.component';

describe('DateHandlerComponent', () => {
  let component: DateHandlerComponent;
  let fixture: ComponentFixture<DateHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateHandlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
