import { LeaveType } from './LeaveType';
import { CapacityPlan } from './CapacityPlan';
import { Employee } from './Employee';
import { OrderItem } from './OrderItem';

export interface WorkSchedule{

    scheduleId:string;
    startTime:string;
    endTime:string;
    date:Date;

    empId:Employee;
    planId:CapacityPlan;
    leaveType:LeaveType;
    orderItemId:OrderItem;
}