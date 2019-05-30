import { CapacityPlan } from './../Models/CapacityPlan';
import { ActivatedRoute } from '@angular/router';
import { WorkScheduleService } from './../workSchedule.service';
import { WorkSchedule } from './../Models/WorkSchedule';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-schedule',
  templateUrl: './work-schedule.component.html',
  styleUrls: ['./work-schedule.component.css']
})
export class WorkScheduleComponent implements OnInit {

  // workSchedule : WorkSchedule;
  workSchedules : WorkSchedule[] = []; 
  capacityPlan : CapacityPlan;
  
  constructor(private workScheduleService : WorkScheduleService, private route : ActivatedRoute) { }

  ngOnInit() {
    

    this.route.paramMap.subscribe(para => {
      let id = para.get("plan-id");
      this.workScheduleService.getWorkSchedulesByPlanId(id).subscribe(workSchedule => {
        console.log(workSchedule)
        this.workSchedules = workSchedule;
        //this.workSchedules = workSchedule.orderItemId;
    })
    })
      
      
   }

  

}
