import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidBillListComponent } from './paid-bill-list.component';

describe('PaidBillListComponent', () => {
  let component: PaidBillListComponent;
  let fixture: ComponentFixture<PaidBillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidBillListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidBillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
