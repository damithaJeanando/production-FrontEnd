import { OrderItem } from './OrderItem';

export interface Order{

    ord_id:string;
    orderDeadline:Date;
    date:Date;
    dele_date:Date;

    products:OrderItem[];

    completionDate:string;
    orderStatus:string;
}