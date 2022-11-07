import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill, months } from '../bill';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-unpaid-bill-list',
  templateUrl: './unpaid-bill-list.component.html',
  styleUrls: ['./unpaid-bill-list.component.css']
})
export class UnpaidBillListComponent implements OnInit {

  searchText: string =''
  bills : Bill[] = []
  months = months
  constructor(private billService : BillService, private router : Router) { }

  ngOnInit(): void {
    this.getBills();
  }

  private getBills() {
    this.billService.getBillByStatus(false).subscribe(data =>
      {
        this.bills = data;
      })
  }

  payBill(id : number, bill : Bill) {
    this.billService.updateBill(bill , id).subscribe(
      data => {
        console.log("Updated")
        this.getBills()
      }
    )
    // this.router.navigate(['paid-bills'])
  }
}
