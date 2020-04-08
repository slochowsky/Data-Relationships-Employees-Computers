import { useComputers } from "./computerProvider.js"
import { useEmployees } from "./employeeProvider.js"
import { useEmployeesDepartments } from "./employeesDepartmentsProvider.js"
import { useDepartments } from "./departmentsProvider.js"
import employee from "./employee.js"


const contentTarget = document.querySelector(".targetDOM")

export const employeeList = () => {
    const computers = useComputers()
    console.log(computers)
    const employees = useEmployees()
    console.log(employees)
    const departments = useDepartments()
    console.log(departments)
    const employeesDepartments = useEmployeesDepartments()
    console.log(employeesDepartments)

    const render = () => {
        contentTarget.innerHTML = employees.map(person => {
            // Find related computers ids            
            // Convert the array from relationship objects to computers objects
            const relatedComputers = computers.find(computer => computer.id === person.computerId)
            
            const relatedDepartments = departments.find(department => department.id === person.departmentId)


            const employeesDepartment = employeesDepartments.filter(ed => ed.employeeId === person.id)

            
            const foundDepartmentArray = employeesDepartment.map(rd => {
               const foundDepartments = departments.find(department => department.id === rd.departmentId)
                return foundDepartments
            })
            // Get HTML representation of product
            const html = employee(person, relatedComputers, relatedDepartments, foundDepartmentArray)

            return html
        }).join("")
    }

    render()
}

export default employeeList