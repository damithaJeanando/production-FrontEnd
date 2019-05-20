import { Inspection } from './Inspection';
import { WorkSchedule } from './WorkSchedule';

export interface Employee{
    
    empId:string;
    name:string;
    dob:Date;
    address:string;
    contactNum:number;
    empType:string;
    username:string;
    password:string;

    workschedules:WorkSchedule[];
    inspections:Inspection[];


}