import { OrderItem } from './OrderItem';

export interface Order{

    orderId:string;
    orderDeadline:Date;
    startDate:Date;
    endDate:Date;

    orderItems:OrderItem[];
}