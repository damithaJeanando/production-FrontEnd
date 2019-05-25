import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url="http://localhost:8080/Employee/"

  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get<Employee[]>(this.url+"allemployees");
  }

  getEmployee(){
    return this.http.get<Employee>(this.url+"emp_id");
  }

  newEmployee(employee : Employee){
    return this.http.post<Employee>(this.url+"new_ws", employee);
  }
}
