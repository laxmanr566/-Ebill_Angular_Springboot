import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillListIdComponent } from './bill-list-id.component';

describe('BillListIdComponent', () => {
  let component: BillListIdComponent;
  let fixture: ComponentFixture<BillListIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillListIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillListIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
