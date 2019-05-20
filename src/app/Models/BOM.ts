import { BillItem } from './BillItem';
import { OrderItem } from './OrderItem';

export interface BOM{

    bomId:string;
    createdDate:Date;

    orderItemId:OrderItem;
    billItems:BillItem[];
}