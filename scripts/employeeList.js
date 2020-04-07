import { useComputers } from "./computerProvider.js"
import { useEmployees } from "./employeeProvider.js"
import { useEmployeesComputers } from "./employeesComputersProvider.js"
import employee from "./employee.js"


const contentTarget = document.querySelector(".targetDOM")

export const employeeList = () => {
    const computers = useComputers()
    console.log(computers)
    const employees = useEmployees()
    console.log(employees)
    const employeeComputers = useEmployeesComputers()
    console.log(employeeComputers)

    const render = () => {
        contentTarget.innerHTML = employees.map(person => {
            // Find related computers ids
            let relatedComputers = employeeComputers.filter(ec => ec.employeeId === person.id)

            // Convert the array from relationship objects to computers objects
            relatedComputers = relatedComputers.map(rc => {
                return computers.find(computer => computer.id === rc.computerId)
            })

            // Get HTML representation of product
            const html = employee(person, relatedComputers)

            return html
        }).join("")
    }

    render()
}

export default employeeList