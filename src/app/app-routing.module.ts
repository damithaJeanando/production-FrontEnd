import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { WorkScheduleComponent } from './work-schedule/work-schedule.component';
import { ViewCapacityPlanComponent } from './view-capacity-plan/view-capacity-plan.component';
import { ViewOrderItemComponent } from './view-order-item/view-order-item.component';

const routes: Routes = [
{path:"view-employees", component:ViewEmployeesComponent},
{path:"employees", component:EmployeeComponent},
{path:"view-orders", component:ViewOrdersComponent},
{path:"work-schedule", component:WorkScheduleComponent},
{path:"view-capacity-plan", component:ViewCapacityPlanComponent},
{path:"view-order-item", component:ViewOrderItemComponent}


                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
