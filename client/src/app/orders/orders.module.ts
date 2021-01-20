import { OrdersRoutingModule } from './orders-routing.module';
import { OrderTotalsComponent } from './../shared/components/order-totals/order-totals.component';
import { BasketSummaryComponent } from './../shared/components/basket-summary/basket-summary.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';

@NgModule({
  declarations: [OrderDetailedComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    BasketSummaryComponent,
    OrderTotalsComponent,
  ]
})
export class OrdersModule { }
