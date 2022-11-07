import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { FormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CreateBillComponent } from './create-bill/create-bill.component';
import { UpdateBillComponent } from './update-bill/update-bill.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { SortDirective } from './directives/sort.directive';
import { BillListIdComponent } from './bill-list-id/bill-list-id.component';
import { CustomerPipe1Pipe } from './customer-pipe-1.pipe';
import { BasePageComponent } from './base-page/base-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UnpaidBillListComponent } from './unpaid-bill-list/unpaid-bill-list.component';
import { PaidBillListComponent } from './paid-bill-list/paid-bill-list.component';
import { PaidBillListIdComponent } from './paid-bill-list-id/paid-bill-list-id.component';
import { UnpaidBillListIdComponent } from './unpaid-bill-list-id/unpaid-bill-list-id.component';
import { ThanksNoteComponent } from './thanks-note/thanks-note.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    CreateBillComponent,
    UpdateBillComponent,
    BillListComponent,
    SortDirective,
    BillListIdComponent,
    CustomerPipe1Pipe,
    BasePageComponent,
    UnpaidBillListComponent,
    PaidBillListComponent,
    PaidBillListIdComponent,
    UnpaidBillListIdComponent,
    ThanksNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
