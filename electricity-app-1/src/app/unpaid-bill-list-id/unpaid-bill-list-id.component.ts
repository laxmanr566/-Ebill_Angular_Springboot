import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill, months } from '../bill';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-unpaid-bill-list-id',
  templateUrl: './unpaid-bill-list-id.component.html',
  styleUrls: ['./unpaid-bill-list-id.component.css']
})
export class UnpaidBillListIdComponent implements OnInit {
  searchText: string =''

  bills : Bill[] = []
  months = months
  id : number = NaN
  temp : number = NaN
  constructor(private billService : BillService,
    private router : Router, private actRouter : ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.actRouter.snapshot.params['id']
    this.temp = this.id
    this.billService.getBillByStatusAndId(this.id, false).
    subscribe(data => {
      this.bills = data;
    })
  }

  payBill(id : number, bill : Bill) {
    this.billService.updateBill(bill , id).subscribe(
      data => {
        console.log("Updated")
      }
    )
    // this.router.navigate(['paid-bills', this.temp])
  }
}
