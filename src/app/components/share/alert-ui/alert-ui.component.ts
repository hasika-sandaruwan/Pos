import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerData} from "../CustomerData";
import {CustomerService} from "../../../services/customer.service";

@Component({
  selector: 'app-alert-ui',
  templateUrl: './alert-ui.component.html',
  styleUrls: ['./alert-ui.component.scss']
})
export class AlertUIComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    public dialogRef: MatDialogRef<AlertUIComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  delete() {
    this.customerService.deleteCustomer(this.data.customerId).subscribe(resp => {
      alert(resp.message);
    }, error => {
      console.log(error);
    });
  }
}
