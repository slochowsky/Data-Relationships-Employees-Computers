import { getComputers } from "./computerProvider.js";
import { getEmployees } from "./employeeProvider.js";
import { getEmployeesComputers } from "./employeesComputersProvider.js";
import employeeList from "./employeeList.js";


getComputers()
    .then(getEmployees)
    .then(getEmployeesComputers)
    .then(employeeList)
