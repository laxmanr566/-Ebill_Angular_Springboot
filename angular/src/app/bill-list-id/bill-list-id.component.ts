  import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bill, months } from '../bill';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-bill-list-id',
  templateUrl: './bill-list-id.component.html',
  styleUrls: ['./bill-list-id.component.css']
})
export class BillListIdComponent implements OnInit {
  searchText: string =''

  bills : Bill[] = []
  months = months
  id : number = NaN
  constructor(private billService : BillService, private actRouter : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.actRouter.snapshot.params['id']
    this.billService.getBillsById(this.id).subscribe(data =>
      {
        this.bills = data;
      })
  }

  private getBills() {
    this.billService.getBillsById(this.id).subscribe(data =>
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
