import { BIStatus } from './BIStatus';
import { RawMaterials } from './RawMaterials';
import { BOM } from './BOM';

export interface BillItem{

    billItemId:string;
    quantity:number;

    materialId:RawMaterials;
    bomId:BOM;
    biStatus:BIStatus;


}