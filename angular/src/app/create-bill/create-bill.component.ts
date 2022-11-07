import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from '../bill';
import { BillService } from '../bill.service';
import { months } from '../bill';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})
export class CreateBillComponent implements OnInit {
  type = ""
  message = ""
  data = [ "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER" ];
  bill : Bill = new Bill();
  enumKeys : any
  types = months
  constructor(private billService : BillService,
     private router : Router, private actRoute : ActivatedRoute) {
      this.enumKeys = Object.keys(this.types).filter(f => !isNaN(Number(f)));
      }
  ngOnInit(): void {
    this.bill.customerId = this.actRoute.snapshot.params['id']
    console.log(this.bill.customerId)
    console.log(this.bill)
  }

  onSubmit() {
    console.log(this.bill)
    console.log(months)
    this.calculateBill(+this.bill.totalUnits);
  }

  private saveBill() {
    this.billService.createBill(this.bill).subscribe(
      data => {
        console.log(data)
        this.goToCustomerList();
      },
      error => {
        console.log(error)
        this.message = "There is already a bill with the same month"
      }
    )
  }

  private goToCustomerList() {
    this.router.navigate(['customer-list'])
  }

  private calculateBill(numberOfUnitsConsumed : number)  {
    if(numberOfUnitsConsumed <= 100)
      this.bill.cost= numberOfUnitsConsumed * 0.5;
    else if (numberOfUnitsConsumed <= 150) {
      this.bill.cost= 100 * 0.5 + (numberOfUnitsConsumed - 100) * 0.75;
    } else {
      this.bill.cost= 100 * 0.5 + 50 * 0.75 + (numberOfUnitsConsumed - 150);
    }
    this.saveBill();
  }


  selected : string  =""
  idx!: number;
  update(e : any){
    this.selected = e.target.value
    this.idx = this.data.indexOf(this.selected)
    switch(this.idx) {
      case 0 :
        this.bill.month = months.JANUARY
        break;
        case 1:
          this.bill.month = months.FEBRUARY
          break
          case 2:
            this.bill.month = months.MARCH
            break;
            case 3:
              this.bill.month = months.APRIL
              break;
              case 4:
                this.bill.month = months.MAY
              break
      case 5:
        this.bill.month = months.JUNE
        break;
      case 6:
        this.bill.month = months.JULY
        break;
      case 7:
        this.bill.month = months.AUGUST
        break;
      case 8:
        this.bill.month = months.SEPTEMBER
        break
      case 9:
        this.bill.month = months.OCTOBER
        break
      case 10:
        this.bill.month = months.NOVEMBER
        break;
      case 11:
        this.bill.month = months.DECEMBER
    }
    // console.log(this.data.indexOf(this.selected))
    console.log(this.bill.month)
  }
}
