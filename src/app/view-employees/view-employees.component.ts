import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  employees : Employee[] = [];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => {
    this.employees = employees;
    })
  }

}
