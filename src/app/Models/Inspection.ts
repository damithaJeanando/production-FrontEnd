import { Timestamp } from 'rxjs';
import { Employee } from './Employee';
import { InspectionStatus } from './InspectionStatus';
import { OrderItem } from './OrderItem';

export interface Inspection{

    inspectionId:string;
    dateTime:string;

    empId:Employee;
    inspectionStatus:InspectionStatus;
    orderItemId:OrderItem;

}