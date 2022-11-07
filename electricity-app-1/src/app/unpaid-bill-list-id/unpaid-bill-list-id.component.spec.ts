import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpaidBillListIdComponent } from './unpaid-bill-list-id.component';

describe('UnpaidBillListIdComponent', () => {
  let component: UnpaidBillListIdComponent;
  let fixture: ComponentFixture<UnpaidBillListIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnpaidBillListIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnpaidBillListIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
