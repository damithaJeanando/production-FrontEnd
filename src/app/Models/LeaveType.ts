import { WorkSchedule } from './WorkSchedule';

export interface LeaveType{

    leaveTypeId:string;
    leaveType:string;

    workSchedule:WorkSchedule;
}