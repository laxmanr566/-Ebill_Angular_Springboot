import { Component, OnInit } from '@angular/core';
import { Bill, months } from '../bill';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-paid-bill-list',
  templateUrl: './paid-bill-list.component.html',
  styleUrls: ['./paid-bill-list.component.css']
})
export class PaidBillListComponent implements OnInit {

  searchText: string =''
  bills : Bill[] = []
  months = months
  constructor(private billService : BillService) { }

  ngOnInit(): void {
    this.getBills();
  }

  private getBills() {
    this.billService.getBillByStatus(true).subscribe(data =>
      {
        this.bills = data;
      })
  }
}
