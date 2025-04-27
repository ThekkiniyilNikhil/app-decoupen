import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectTarvellersDetailsModalComponent } from './collect-tarvellers-details-modal.component';

describe('CollectTarvellersDetailsModalComponent', () => {
  let component: CollectTarvellersDetailsModalComponent;
  let fixture: ComponentFixture<CollectTarvellersDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectTarvellersDetailsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectTarvellersDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
