import { WorkSchedule } from './WorkSchedule';

export interface CapacityPlan{

    planId:string;
    startDate:Date;
    endDate:Date;

    workSchedules:WorkSchedule[];
}