import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  searchText: string =''
  customers : Customer[] = []
  i : number = 1

  constructor(private customerService : CustomerService, private router : Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers() {
    this.customerService.getCustomerList().subscribe(data =>
      {
        this.customers=data;
      })
  }
  updateCustomer(id : number) {
    this.router.navigate(['update-customer', id])
  }

  deleteCustomer(id : number) {
    this.customerService.deleteCustomer(id).subscribe(
      data => {
        this.getCustomers();
      }
    )
  }

  addBill(id : number) {
    this.router.navigate(['create-bill', id])
  }

  viewBills(id : number) {
    this.router.navigate(['bill-list-id', id])
  }
}
