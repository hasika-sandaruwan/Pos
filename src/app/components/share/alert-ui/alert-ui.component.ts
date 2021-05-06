import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerData} from "../CustomerData";

@Component({
  selector: 'app-alert-ui',
  templateUrl: './alert-ui.component.html',
  styleUrls: ['./alert-ui.component.scss']
})
export class AlertUIComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AlertUIComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
