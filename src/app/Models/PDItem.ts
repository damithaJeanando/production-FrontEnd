import { ProductDesign } from './ProductDesign';
import { RawMaterials } from './RawMaterials';

export interface PDItem{

    designItemId:string;
    quantity:number;

    productDesign:ProductDesign;
    materialId:RawMaterials;
    
}