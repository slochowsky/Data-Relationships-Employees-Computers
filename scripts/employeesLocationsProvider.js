let employeesLocations = []


export const useEmployeesLocations = () => employeesLocations.slice()

export const getEmployeesLocations = () => fetch("http://localhost:8088/employeesLocations")
    .then(res => res.json())
    .then(data => employeesLocations = data)