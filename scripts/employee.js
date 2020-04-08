const employee = (person, computer, department) => {
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
            </section>
    `
}

export default employee