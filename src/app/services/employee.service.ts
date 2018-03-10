import {Injectable} from "@angular/core"
import employees_mock from "../employee/employee.mock"
import { Employee } from "../employee/employee";

@Injectable()
export class EmployeeService {
    public employees:Array<Employee>=employees_mock;

    getAll(){
        return this.employees
    }
    getEmployee(id):Employee{
        let employee=this.employees.filter(employee=>(employee.id=id))
        if (employee){
            return employee[0]
        }else{
            return null
        }
    }
    filterEmployeeForName(keyword):Employee{
        let employee=this.employees.filter(
            employee=>(
                employee.name.indexOf(keyword)>=0
            ))
        if (employee){
            return employee[0]
        }else{
            return null
        }
    }

}
