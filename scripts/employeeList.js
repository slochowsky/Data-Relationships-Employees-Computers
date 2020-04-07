import { useComputers } from "./computerProvider.js"
import { useEmployees } from "./employeeProvider.js"
import { useEmployeesComputers } from "./employeesComputersProvider.js"
import employee from "./employee.js"


const contentTarget = document.querySelector(".targetDOM")

export const employeeList = () => {
    const computers = useComputers()
    const employees = useEmployees()
    const employeeComputers = useEmployeesComputers()

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