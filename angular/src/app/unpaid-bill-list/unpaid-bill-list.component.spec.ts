import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpaidBillListComponent } from './unpaid-bill-list.component';

describe('UnpaidBillListComponent', () => {
  let component: UnpaidBillListComponent;
  let fixture: ComponentFixture<UnpaidBillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnpaidBillListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnpaidBillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
