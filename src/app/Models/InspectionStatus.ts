import { Inspection } from './Inspection';

export interface InspectionStatus{

    isId:string;
    inspectionStatus:string;

    inspections:Inspection[];
}