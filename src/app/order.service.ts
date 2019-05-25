import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './Models/Order';
import { OrderItem } from './Models/OrderItem';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  url="http://localhost:8080/Order/"
  

  constructor(private http:HttpClient) {}
    
    getOrders() {
      return this.http.get<Order[]>(this.url+"order")
    }
  
   
}
