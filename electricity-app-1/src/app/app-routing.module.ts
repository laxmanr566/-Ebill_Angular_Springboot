import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasePageComponent } from './base-page/base-page.component';
import { BillListIdComponent } from './bill-list-id/bill-list-id.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { CreateBillComponent } from './create-bill/create-bill.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PaidBillListIdComponent } from './paid-bill-list-id/paid-bill-list-id.component';
import { PaidBillListComponent } from './paid-bill-list/paid-bill-list.component';
import { ThanksNoteComponent } from './thanks-note/thanks-note.component';
import { UnpaidBillListIdComponent } from './unpaid-bill-list-id/unpaid-bill-list-id.component';
import { UnpaidBillListComponent } from './unpaid-bill-list/unpaid-bill-list.component';
import { UpdateBillComponent } from './update-bill/update-bill.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  {path : "customer-list", component: CustomerListComponent},
  // {path : '', redirectTo : 'sample', pathMatch : 'full'}
  {path : "create-customer", component : CreateCustomerComponent},
  {path : "update-customer/:id", component : UpdateCustomerComponent},
  {path : "bill-list", component : BillListComponent},
  {path : "create-bill/:id", component : CreateBillComponent},
  {path : "update-bill/:id", component : UpdateBillComponent},
  {path : "bill-list-id/:id", component : BillListIdComponent},
  {path : "base-page", component : BasePageComponent},
  {path : '', redirectTo : '/base-page', pathMatch : 'full'},
  {path : 'paid-bills', component : PaidBillListComponent},
  {path : 'unpaid-bills', component : UnpaidBillListComponent},
  {path : 'paid-bills/:id', component : PaidBillListIdComponent},
  {path : 'unpaid-bills/:id', component : UnpaidBillListIdComponent},
  {path : 'thanks-note', component : ThanksNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
