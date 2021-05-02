import {Injectable} from '@angular/core';
import CustomerDTO from '../dtos/CustomerDTO';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = 'http://localhost:3000/api/v1/customerRoute/saveCustomer';

  constructor(private http: HttpClient) {
  }

  public saveCustomer(c: CustomerDTO): Observable<any> {
    return this.http.post(this.baseUrl, {
      customerId: c.customerId,
      customerName: c.customerName,
      customerSalary: c.customerSalary,
      customerAddress: c.customerAddress,
    });
  }

}
