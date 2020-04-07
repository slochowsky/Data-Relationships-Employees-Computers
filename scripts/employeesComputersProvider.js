let employeesComputers = []

export const useEmployeesComputers = () => employeesComputers.slice()

export const getEmployeesComputers = () => fetch("http://localhost:8088/employeesComputers")
    .then(res => res.json())
    .then(data => employeesComputers = data)
    console.log(employeesComputers);