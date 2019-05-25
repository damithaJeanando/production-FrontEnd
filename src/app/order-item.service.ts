import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from './Models/OrderItem';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  url="http://localhost:8080/OrderItem/"

  constructor(private http:HttpClient) { }

  getOrderItem(){
    return this.http.get<OrderItem>(this.url+"order_item_id")
  }
}
