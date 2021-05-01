import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerPageComponent} from './components/common/customer-page/customer-page.component';
import {ItemPageComponent} from './components/common/item-page/item-page.component';
import {OrderPageComponent} from './components/common/order-page/order-page.component';
import {OrderDetailsPageComponent} from './components/common/order-details-page/order-details-page.component';

const routes: Routes = [
  {path: 'customer', component: CustomerPageComponent},
  {path: 'items', component: ItemPageComponent},
  {path: 'orders', component: OrderPageComponent},
  {path: 'order-details', component: OrderDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
