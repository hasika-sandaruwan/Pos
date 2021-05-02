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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerPageComponent,
    ItemPageComponent,
    OrderPageComponent,
    OrderDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
