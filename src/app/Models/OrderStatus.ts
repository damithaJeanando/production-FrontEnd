import { OrderItem } from './OrderItem';

export interface OrderStatus{

    orderStatus:string;

    orderItems:OrderItem[];
}