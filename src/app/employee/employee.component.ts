import {Component} from "@angular/core"
import { Employee } from "./employee";
import { EmployeeService } from "../services/employee.service";

@Component({
    selector:"Employee",
    templateUrl:"./employee.component.html",
    styleUrls:["./employee.component.css"],
    providers:[EmployeeService]    
})
export class EmployeeComponent {
    public employee:Employee;
    public employees:Array<Employee>;
    public gender:string="";
    public keyword:string="";
    
    constructor(
        private _employee_service:EmployeeService
    ){
        this.employees=_employee_service.getAll()
        
    }

    filter_gender(gender:string){
        this.gender=gender
    }
    search_name(name:string){
        return name.toLocaleLowerCase().indexOf(this.keyword.toLocaleLowerCase())>=0
    }
}