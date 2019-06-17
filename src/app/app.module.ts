import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WorkScheduleComponent } from './work-schedule/work-schedule.component';
import { ViewCapacityPlanComponent } from './view-capacity-plan/view-capacity-plan.component';
import { ViewOrderItemComponent } from './view-order-item/view-order-item.component';
import { BomComponent } from './bom/bom.component';
import { InspectOrderItemComponent } from './inspect-order-item/inspect-order-item.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ViewEmployeesComponent,
    ViewOrdersComponent,
    NavBarComponent,
    WorkScheduleComponent,
    ViewCapacityPlanComponent,
    ViewOrderItemComponent,
    BomComponent,
    InspectOrderItemComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
