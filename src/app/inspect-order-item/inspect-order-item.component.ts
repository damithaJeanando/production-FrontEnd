import { Component, OnInit } from '@angular/core';
import { Inspection } from '../Models/Inspection';
import { InspectionService } from '../inspection.service';

@Component({
  selector: 'app-inspect-order-item',
  templateUrl: './inspect-order-item.component.html',
  styleUrls: ['./inspect-order-item.component.css']
})
export class InspectOrderItemComponent implements OnInit {

  inspections : Inspection[] = [];
  constructor(private inspectionService : InspectionService) { }

  ngOnInit() {
    // this.inspectionService.getCapacityPlans().subscribe(inspections => {
    //   this.inspections = inspections;
    // })
  }

}
