const employee = (person, computer, department, location, customers) => {
    return `
        <section class="employees">
            <header class="employee__name">
                <h2>${person.firstName} ${person.lastName}</h2>
            </header>
            <section class="employee__computer">
            Uses a ${computer.model}  ${computer.year}
            </section>
            <section class="employee__department">
            Works in the ${department.name}
            </section>
            <section class="employee__location">
            Works at the ${location.name}
        </section>
        <section class="employee__customers">
        Has worked for the following customers.
        <ul>
        ${customers.map(customer => {
            return `<li>${customer.businessName}</li> `
        }).join("")
    }
        </ul>
    </section>
            </section>
    `
}
        
export default employee