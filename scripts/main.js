import { getComputers } from "./computerProvider.js";
import { getEmployees } from "./employeeProvider.js";
import { getEmployeesLocations } from "./employeesLocationsProvider.js";
import { getDepartments } from "./departmentsProvider.js";
import { getLocations } from "./locationsDataProvider.js";
import employeeList from "./employeeList.js";


getComputers()
    .then(getEmployees)
    .then(getDepartments)
    .then(getLocations)
    .then(getEmployeesLocations)
    .then(employeeList)
