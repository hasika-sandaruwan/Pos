import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import CustomerDTO from '../../../dtos/CustomerDTO';
import {CustomerService} from '../../../services/customer.service';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    customerId: new FormControl(null, [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(3)
    ]),
    customerName: new FormControl(null, [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(3)
    ]),
    customerSalary: new FormControl(null, [
      Validators.required,
      Validators.maxLength(5),
      Validators.minLength(3)
    ]),
    customerAddress: new FormControl(null, [
      Validators.required,
      Validators.maxLength(100),
      Validators.minLength(10)
    ]),
  });

  constructor(private customerService: CustomerService) {
  }

  customerArray: CustomerDTO[] = [];

  ngOnInit(): void {
    this.loadAllCustomers();
  }

  private loadAllCustomers() {
    this.customerService.getAllCustomers().subscribe(resp => {
      this.customerArray = resp.dataSet;
    }, error => {
      console.log(error);
    });
  }

  saveCustomer() {
    const customer = new CustomerDTO(
      this.customerForm.get('customerId')?.value,
      this.customerForm.get('customerName')?.value,
      Number(this.customerForm.get('customerSalary')?.value),
      this.customerForm.get('customerAddress')?.value
    );

    this.customerService.saveCustomer(customer).subscribe(resp => {
      console.log(resp);
      if (resp.state === true) {
        alert('Saved');
      }
    }, error => {
      console.log(error);
    });


  }
}
