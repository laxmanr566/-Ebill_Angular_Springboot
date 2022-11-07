import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from './bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private baseUrl = "http://localhost:8080/api/bills"
  private addUrl ="http://localhost:8080/api/bills/add"
  private updateUrl = "http://localhost:8080/api/bills/update"
  private paidBills = "http://localhost:8080/api/bills/status"
  constructor(private httpClient : HttpClient) { }

  getBillList() : Observable<Bill[]> {
    return this.httpClient.get<Bill[]>(`${this.baseUrl}`);
  }

  createBill(bill : Bill) : Observable<Object> {
    return this.httpClient.post(`${this.addUrl}`, bill)
  }

  getBillsById(id : number) : Observable<Bill[]> {
    return this.httpClient.get<Bill[]>(`${this.baseUrl}/${id}`);
  }

  updateBill(bill : Bill, id : number) : Observable<Object> {
    return this.httpClient.put(`${this.updateUrl}/${id}`, bill)
  }

  getBillByStatus(status : boolean) : Observable<Bill[]> {

    return this.httpClient.get<Bill[]>(`${this.paidBills}/${status}`)
  }

  getBillByStatusAndId(id : number, status : boolean) :
  Observable<Bill[]> {
    return this.httpClient.get<Bill[]>(`${this.paidBills}/${id}/${status}`)
  }
}
