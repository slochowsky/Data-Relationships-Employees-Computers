import { getComputers } from "./computerProvider.js";
import { getEmployees } from "./employeeProvider.js";
import { getEmployeesDepartments } from "./employeesDepartmentsProvider.js";
import { getDepartments } from "./departmentsProvider.js";
import employeeList from "./employeeList.js";


getComputers()
    .then(getEmployees)
    .then(getDepartments)
    .then(getEmployeesDepartments)
    .then(employeeList)
