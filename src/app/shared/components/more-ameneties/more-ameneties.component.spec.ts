import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAmenetiesComponent } from './more-ameneties.component';

describe('MoreAmenetiesComponent', () => {
  let component: MoreAmenetiesComponent;
  let fixture: ComponentFixture<MoreAmenetiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreAmenetiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreAmenetiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
