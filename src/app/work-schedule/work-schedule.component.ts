import { WorkScheduleService } from './../workSchedule.service';
import { WorkSchedule } from './../Models/WorkSchedule';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-schedule',
  templateUrl: './work-schedule.component.html',
  styleUrls: ['./work-schedule.component.css']
})
export class WorkScheduleComponent implements OnInit {

  workSchedule : WorkSchedule 

  constructor(private workScheduleService : WorkScheduleService) { }

  ngOnInit() {
    this.workScheduleService.addWorkSchedule(this.workSchedule).subscribe(workSchedule => {
      this.workSchedule = workSchedule;
      })
  }

}
