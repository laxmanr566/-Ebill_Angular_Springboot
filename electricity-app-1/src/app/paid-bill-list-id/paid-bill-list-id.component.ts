import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bill, months } from '../bill';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-paid-bill-list-id',
  templateUrl: './paid-bill-list-id.component.html',
  styleUrls: ['./paid-bill-list-id.component.css']
})
export class PaidBillListIdComponent implements OnInit {
  searchText: string =''
  bills : Bill[] = []
  months = months
  id : number = NaN
  constructor(private billService : BillService,
    private actRouter : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.actRouter.snapshot.params['id']
    this.billService.getBillByStatusAndId(this.id, true).
    subscribe(data => {
      this.bills = data;
    })
  }

}
