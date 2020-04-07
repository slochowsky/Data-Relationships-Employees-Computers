const employee = (employees, computers) => {
    return `
        <section class="employees">
            <header>
                <h2>${employees.firstName} ${employees.lastName}</h2>
            </header>
            <div>
                <ol>
                    ${
                    computers.map(computer => `<li>${computer.model}</li>
                    <ul>Date Manufactured: ${computer.year}</ul>`).join("")
                    }
                </ol>
            </div>
        </section>
    `
}

export default employee