import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Customer, CustomerTypes } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = "http://localhost:8080/api/customers"
  private addUrl = "http://localhost:8080/api/customers/add"
  private updateUrl = "http://localhost:8080/api/customers/update"
  private deleteUrl = "http://localhost:8080/api/customers/delete"
  constructor(private httpClient : HttpClient) { }

  getCustomerList() : Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.baseUrl}`)
  }

  createCustomer(customer : Customer) : Observable<Object> {
    return this.httpClient.post(`${this.addUrl}`, customer)
  }


  getCustomerById(id : number) : Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseUrl}/${id}`)

  }

  updateCustomer(customer : Customer, id : number) :Observable<Object> {
    console.log(this.httpClient.put(`${this.updateUrl}/${id}`, customer));

    return this.httpClient.put(`${this.updateUrl}/${id}`, customer)
  }

  deleteCustomer(id : number) {
    return this.httpClient.delete(`${this.deleteUrl}/${id}`);
  }
}
