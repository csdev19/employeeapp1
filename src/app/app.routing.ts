import {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule} from "@angular/router"
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { Page404Component } from "./page-404/page-404.component";

const appRoutes:Routes=[
    {path:"",component:EmployeeComponent},
    {path:"employee-list",component:EmployeeComponent},
    {path:"employee-detail/:idEmployee",component:EmployeeDetailComponent},
    {path:"**",component:Page404Component}
];

export const appRoutingProvider:any[]=[];
export const routing:ModuleWithProviders =RouterModule.forRoot(appRoutes);