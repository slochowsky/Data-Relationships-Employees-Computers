import { useComputers } from "./computerProvider.js"
import { useEmployees } from "./employeeProvider.js"
import { useEmployeesLocations } from "./employeesLocationsProvider.js"
import { useDepartments } from "./departmentsProvider.js"
import employee from "./employee.js"
import { useLocations } from "./locationsDataProvider.js"


const contentTarget = document.querySelector(".targetDOM")

export const employeeList = () => {
    const computers = useComputers()
    console.log(computers)
    const employees = useEmployees()
    console.log(employees)
    const departments = useDepartments()
    console.log(departments)
    const locations = useLocations()
    const employeesLocations = useEmployeesLocations()
    console.log(employeesLocations)

    const render = () => {
        contentTarget.innerHTML = employees.map(person => {
            // Find related computers ids            
            // Convert the array from relationship objects to computers objects
            const relatedComputers = computers.find(computer => computer.id === person.computerId)
            
            const relatedDepartments = departments.find(department => department.id === person.departmentId)

            const relatedLocation = locations.find(location => location.id === person.locationId)

            
            // Get HTML representation of product
            const html = employee(person, relatedComputers, relatedDepartments, relatedLocation)

            return html
        }).join("")
    }

    render()
}

export default employeeList