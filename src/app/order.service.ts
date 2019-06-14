import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './Models/Order';
import { OrderItem } from './Models/OrderItem';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  url="http://localhost:8080/Order/"
  salesUrl = "http://192.168.1.100/assets/php/order_details.php?orders=?orders=1&user=admin&secret=22400"
  

  constructor(private http:HttpClient) {}

  orders:Order[] = [];
    
    getOrders() {
      
      return this.http.get<Order[]>(this.salesUrl).subscribe(orders => {
        this.orders = orders;
      })
    }
  
    getOrder(id : String){
      return this.http.get<Order>(this.url+id)
    }
   
}
