import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee/employee';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers:[EmployeeService]
})
export class EmployeeDetailComponent implements OnInit {
  public id:number;
  public employee:Employee;
  
  constructor(
    private _activate_route:ActivatedRoute,
    private _employee_service:EmployeeService
  ) { 
      this.id=parseInt(this._activate_route.snapshot.params["idEmployee"])
      this.employee=this._employee_service.getEmployee(this.id);
      console.log(this.employee)
    }

  ngOnInit() {
  }

}
