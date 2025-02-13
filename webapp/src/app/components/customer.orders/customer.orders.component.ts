import { Component, inject } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../types/order';
import { Product } from '../../types/product';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-customer.orders',
  imports: [DatePipe],
  templateUrl: './customer.orders.component.html',
  styleUrl: './customer.orders.component.css'
})
export class CustomerOrdersComponent {
orders:Order []=[];
orderService = inject(OrderService);

ngOnInit(){
  this.orderService.getCustomerOrders().subscribe((result)=>{
    this.orders = result;
    console.log(this.orders);
  });
}
sellingPrice(product:Product) {
return Math.round(
product.price - (product.price * product.discount) / 100
);
}
}
