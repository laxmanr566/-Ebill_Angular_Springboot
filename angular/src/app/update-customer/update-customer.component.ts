import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CustomerTypes } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id : number = NaN
  customer : Customer = new Customer();
  types = CustomerTypes
  tempCustomer :number = 0;
  enumKeys : any;
  data =   ['INDUSTRIAL',
  'COMMERCIAL',
  'RESIDENTIAL']
  message: string = ""
  constructor(private customerService : CustomerService,
    private actRouter : ActivatedRoute, private router : Router) {
      this.enumKeys = Object.keys(this.types).filter(f => !isNaN(Number(f)));

    }

  ngOnInit(): void {
    this.id = this.actRouter.snapshot.params['id'];
    this.customerService.getCustomerById(this.id)
    .subscribe(data => {
      this.customer = data;
    })
  }

  private updateCustomer() {
    this.customerService.updateCustomer(this.customer, this.id)
    .subscribe(data => {
      console.log(data)
      this.customer = new Customer();
      this.goToList();
    },
    error => {
      console.log(error)
      this.message = "Customer with the same details is already present"
    })
  }

  goToList() {
    this.router.navigate(['customer-list'])
  }

  onSubmit() {
    this.updateCustomer();
  }

  selected : string  =""
  idx!: number;
  update(e : any){
    this.selected = e.target.value
    this.idx = this.data.indexOf(this.selected)
    if(this.idx === 0) {
      this.customer.type = CustomerTypes.INDUSTRIAL
    } else if(this.idx === 1) {
      this.customer.type = CustomerTypes.COMMERCIAL
    } else {
      this.customer.type = CustomerTypes.RESIDENTIAL
    }
    // console.log(this.data.indexOf(this.selected))
    console.log(this.customer.type)
  }
}
