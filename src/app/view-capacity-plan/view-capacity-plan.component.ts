import { CapacityPlanService } from './../capacity-plan.service';
import { CapacityPlan } from './../Models/CapacityPlan';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-capacity-plan',
  templateUrl: './view-capacity-plan.component.html',
  styleUrls: ['./view-capacity-plan.component.css']
})
export class ViewCapacityPlanComponent implements OnInit {

  capacityPlans : CapacityPlan[] = [];
  constructor(private capacityPlanService : CapacityPlanService) { }

  ngOnInit() {
    this.capacityPlanService.getCapacityPlans().subscribe(capacityPlans => {
      this.capacityPlans = capacityPlans;
    })
  }
}
