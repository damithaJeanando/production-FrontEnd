import { BOM } from './../Models/BOM';
import { BomService } from './../bom.service';
import { Order } from './../Models/Order';
import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../Models/OrderItem';
import { OrderItemService } from '../order-item.service';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-view-order-item',
  templateUrl: './view-order-item.component.html',
  styleUrls: ['./view-order-item.component.css']
})
export class ViewOrderItemComponent implements OnInit {

  order : Order;
  orderItems : OrderItem[]=[];
  bom : BOM;

  constructor(private orderService:OrderService, private route : ActivatedRoute, private bomService : BomService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(para => {
      let id = para.get("order-id");
      this.orderService.getOrder(id).subscribe(order => {
        this.order = order
        this.orderItems = order.products;
        console.log(order)
      })
    console.log(id)

    })
 
}

}
