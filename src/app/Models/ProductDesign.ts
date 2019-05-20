import { PDItem } from './PDItem';
import { Product } from './Product';

export interface ProductDesign{

    designId:string;
    requiredWorkHours:number;

    productId:Product;
    pdItems:PDItem[];
    
}