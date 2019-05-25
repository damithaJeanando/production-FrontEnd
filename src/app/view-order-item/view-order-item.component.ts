import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../Models/OrderItem';
import { OrderItemService } from '../order-item.service';

@Component({
  selector: 'app-view-order-item',
  templateUrl: './view-order-item.component.html',
  styleUrls: ['./view-order-item.component.css']
})
export class ViewOrderItemComponent implements OnInit {

  orderItem : OrderItem;

  constructor(private orderItemService:OrderItemService) { }

  ngOnInit() {
    this.orderItemService.getOrderItem().subscribe(orderItem => {
      this.orderItem = orderItem;
  })
}

}
