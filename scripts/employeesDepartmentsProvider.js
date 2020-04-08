let employeesDepartments = []


export const useEmployeesDepartments = () => employeesDepartments.slice()

export const getEmployeesDepartments = () => fetch("http://localhost:8088/employeesDepartments")
    .then(res => res.json())
    .then(data => employeesDepartments = data)