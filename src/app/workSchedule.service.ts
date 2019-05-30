import { WorkSchedule } from './Models/WorkSchedule';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkScheduleService {

  url="http://localhost:8080/WorkSchedule/"

  constructor(private http:HttpClient) { }

  getAllWorkSchedules(){
    return this.http.get<WorkSchedule[]>(this.url+"allworkschedules");
  }

  getWorkSchedulesByPlanId(planId : String){
    return this.http.get<WorkSchedule[]>(this.url+"view-capacity-plan/"+planId);
  }
  getWorkSchedule(id : String){
    return this.http.get<WorkSchedule>(this.url+id)
  }

  addWorkSchedule(workSchedule : WorkSchedule){
    return this.http.post<WorkSchedule>(this.url+"new_ws", workSchedule);
  }

  deleteWorkSchedule(){
    this.http.delete<WorkSchedule>(this.url+"ws_id");
  }
}
