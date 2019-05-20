import { OrderItem } from './OrderItem';

export interface Product{

    productId:string;
    productName:string;

    orderItems:OrderItem[];
}