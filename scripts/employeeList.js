import { useComputers } from "./computerProvider.js"
import { useEmployees } from "./employeeProvider.js"
import { useDepartments } from "./departmentsProvider.js"
import { useLocations } from "./locationsDataProvider.js"
import { useEmployeeCustomers } from "./employeesCustomersProvider.js"
import { useCustomers } from "./customerProvider.js"
import employee from "./employee.js"


const contentTarget = document.querySelector(".targetDOM")

export const employeeList = () => {
    const computers = useComputers()
    console.log("computer array", computers)
    const employees = useEmployees()
    console.log("employeee array", employees)
    const departments = useDepartments()
    console.log("department array", departments)
    const locations = useLocations()
    console.log("location array", locations)
    const customers = useCustomers()
    console.log("customer array", customers)
    const employeeCustomers = useEmployeeCustomers()
    console.log("employe customers array", employeeCustomers)

    const render = () => {
        contentTarget.innerHTML = employees.map(person => {
            // Find related computers ids            
            const relatedComputers = computers.find(computer => computer.id === person.computerId)
            
            const relatedDepartments = departments.find(department => department.id === person.departmentId)

            const relatedLocation = locations.find(location => location.id === person.locationId)

            const relationships = employeeCustomers.filter(ec => ec.employeeId === person.id)
            // Get HTML representation of product
            const html = employee(person, relatedComputers, relatedDepartments, relatedLocation, customers, relationships)

            return html
        }).join("")
    }

    render()
}

export default employeeList

