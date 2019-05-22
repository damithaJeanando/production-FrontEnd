import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
{path:"view-employees", component:ViewEmployeesComponent},
{path:"employees", component:EmployeeComponent},
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
