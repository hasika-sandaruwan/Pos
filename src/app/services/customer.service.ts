import {Injectable} from '@angular/core';
import CustomerDTO from '../dtos/CustomerDTO';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public saveCustomer(c: CustomerDTO): Observable<any> {
    return this.http.post(this.baseUrl + 'customerRoute/saveCustomer', {
      customerId: c.customerId,
      customerName: c.customerName,
      customerSalary: c.customerSalary,
      customerAddress: c.customerAddress,
    });
  }

  public getAllCustomers(): Observable<any> {
    return this.http.get(this.baseUrl + 'customerRoute/getAllCustomers');
  }

}
