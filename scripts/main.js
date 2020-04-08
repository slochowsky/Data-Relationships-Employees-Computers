import { getComputers } from "./computerProvider.js";
import { getEmployees } from "./employeeProvider.js";
import { getDepartments } from "./departmentsProvider.js";
import { getLocations } from "./locationsDataProvider.js";
import { getEmployeeCustomers } from "./employeesCustomersProvider.js";
import { getCustomers } from "./customerProvider.js";
import employeeList from "./employeeList.js";


getComputers()
    .then(getEmployees)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(employeeList)
