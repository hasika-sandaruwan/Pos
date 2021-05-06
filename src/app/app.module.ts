import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/share/header/header.component';
import {CustomerPageComponent} from './components/common/customer-page/customer-page.component';
import {ItemPageComponent} from './components/common/item-page/item-page.component';
import {OrderPageComponent} from './components/common/order-page/order-page.component';
import {OrderDetailsPageComponent} from './components/common/order-details-page/order-details-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {AlertUIComponent} from './components/share/alert-ui/alert-ui.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerPageComponent,
    ItemPageComponent,
    OrderPageComponent,
    OrderDetailsPageComponent,
    AlertUIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
