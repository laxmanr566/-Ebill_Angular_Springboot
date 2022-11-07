import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { months } from '../bill';
import { Customer } from '../customer';
import { CustomerTypes } from '../customer'
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  message : string = ""
  customer : Customer = new Customer();
  types = CustomerTypes
  tempCustomer : Customer[] = [];
  enumKeys : any;
  flag : boolean = false;
  selectedDay : any
  data =   ['INDUSTRIAL',
  'COMMERCIAL',
  'RESIDENTIAL']
  constructor(private customerService: CustomerService, private router : Router) {
    this.enumKeys = Object.keys(this.types).filter(f => !isNaN(Number(f)));
   }

  ngOnInit(): void {

  }

  private saveEmployee() {
    this.customerService.createCustomer(this.customer).subscribe
    (data =>
      {
        console.log(data);
        this.goToCustomerList();
      },
      error => {
        console.log(error)
        this.message = "Customer with the same details is already present"
      })
  }

  goToCustomerList() {
    this.router.navigate(['customer-list'])
  }

  onSubmit() {

    console.log(this.customer)
      this.saveEmployee();
  }

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }

	selectedTeam = '';
	onSelected(value:string): void {
		this.selectedTeam = value;
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
