import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import CustomerDTO from '../../../dtos/CustomerDTO';
import {CustomerService} from '../../../services/customer.service';
import {MatDialog} from '@angular/material/dialog';
import {AlertUIComponent} from '../../share/alert-ui/alert-ui.component';

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
  id = '';
  name = '';
  address = '';
  salary = 0;

  updateForm: FormGroup = new FormGroup({
    id: new FormControl(this.id, [Validators.required]),
    name: new FormControl(this.name, [Validators.required]),
    address: new FormControl(this.address, [Validators.required]),
    salary: new FormControl(this.salary, [Validators.required])
  });

  constructor(public dialog: MatDialog, private customerService: CustomerService) {
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


  deleteCustomer(c: CustomerDTO) {
    /* if (confirm('Are you sure?')){
       alert('delete');
     }else{
       alert('closed by user');
     }*/
    this.openDialog(c);
  }

  openDialog(c: CustomerDTO): void {
    const dialogRef = this.dialog.open(AlertUIComponent, {
      data: {
        customerId: c.customerId,
        customerName: c.customerName,
        customerSalary: c.customerSalary,
        customerAddress: c.customerAddress,
      }
    });
  }


  updateCustomer(tc: CustomerDTO) {
    this.id = tc.customerId;
    this.name = tc.customerName;
    this.address = tc.customerAddress;
    this.salary = tc.customerSalary;

    document.getElementById('launchButton')?.click();

  }

  update() {
    const dto = new CustomerDTO(
      this.id,
      this.name,
      this.salary,
      this.address
    );
    this.customerService.updateCustomer(dto).subscribe(resp => {
      alert(resp.message);
    }, error => {
      alert(error);
    });
  }
}
