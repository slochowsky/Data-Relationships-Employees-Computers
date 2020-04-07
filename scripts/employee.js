const employee = (employees, computers) => {
    return `
        <section class="employees">
            <header>
                <h2>${employees.firstName}, ${employees.lastName}</h2>
            </header>
            <div>
                <ol>
                    ${
                    computers.map(computer => `<li>${computer.model}</li>
                    <p>Date Manufactured: ${computer.year}</p>`).join("")
                    }
                </ol>
            </div>
        </section>
    `
}

export default employee