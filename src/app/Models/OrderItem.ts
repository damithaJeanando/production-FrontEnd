import { Order } from './Order';
import { Inspection } from './Inspection';
import { Product } from './Product';
import { OrderStatus } from './OrderStatus';

export interface OrderItem{

    orderItemId:number;
    quantity:number;

    orderId:Order;
    inspectionId:Inspection;
    productId:Product;
    orderStatus:OrderStatus;
    
}