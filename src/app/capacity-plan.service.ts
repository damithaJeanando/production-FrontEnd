import { CapacityPlan } from './Models/CapacityPlan';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CapacityPlanService {

   url="http://localhost:8080/CapacityPlan/"
  

  constructor(private http:HttpClient) { }

  getCapacityPlans(){
    return this.http.get<CapacityPlan[]>(this.url+"capacity_plans")
  }

  
}
