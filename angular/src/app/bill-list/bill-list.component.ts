import { Component, OnInit } from '@angular/core';
import { Bill } from '../bill';
import { BillService } from '../bill.service';
import { months } from '../bill';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  searchText: string =''
  bills : Bill[] = []
  months = months
  constructor(private billService : BillService) { }

  ngOnInit(): void {
    this.getBills();
  }

  private getBills() {
    this.billService.getBillList().subscribe(data =>
      {
        this.bills = data;
      })
  }

  payBill(id : number, bill : Bill) {
    this.billService.updateBill(bill , id).subscribe(
      data => {
        console.log("Updated")
      }
    )
  }
}
