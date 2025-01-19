import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementDecrementCounterComponent } from './increment-decrement-counter.component';

describe('IncrementDecrementCounterComponent', () => {
  let component: IncrementDecrementCounterComponent;
  let fixture: ComponentFixture<IncrementDecrementCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementDecrementCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementDecrementCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
