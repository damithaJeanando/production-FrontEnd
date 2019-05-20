import { BillItem } from './BillItem';
export interface BIStatus{

    biStatusId:string;
    billItemStatus:string;

    billItems:BillItem[];
    
}