import { useEmployees } from "./employeeProvider.js"
import { useCustomers } from "./customerProvider.js"
import { useEmployeeCustomers } from "./employeesCustomersProvider.js"
import Customer from "./customer.js"

const contentTarget = document.querySelector(".customers")

export const customerList = () => {
    const employees = useEmployees()
    const customers = useCustomers()
    const customerRelationships = useEmployeeCustomers()

    const render = () => {
        contentTarget.innerHTML = customers.map(customer => {
                    // Find all the customer relationships
                    const relationships = customerRelationships.filter(ec => ec.customerId === customer.id)
                    // Find the related employee for each relationship
                    const assignedEmployees = relationships.map(rel => {
                    //find customers by comparing the customers id to the id in the join table
                    return employees.find(employee => employee.id === rel.employeeId)
                    })
            //get HTML representation of employee with computer model
            const html = Customer(customer, assignedEmployees)

            return html
        }).join("")
    }

    render()
}

export default customerList