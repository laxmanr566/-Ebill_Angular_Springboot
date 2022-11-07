import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidBillListIdComponent } from './paid-bill-list-id.component';

describe('PaidBillListIdComponent', () => {
  let component: PaidBillListIdComponent;
  let fixture: ComponentFixture<PaidBillListIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidBillListIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidBillListIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
