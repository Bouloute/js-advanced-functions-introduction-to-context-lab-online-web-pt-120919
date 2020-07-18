function createEmployeeRecord(employeeInfo){
  
  return {
    firstName: employeeInfo[0],
    familyName: employeeInfo[1],
    title: employeeInfo[2],
    payPerHour: employeeInfo[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  
}

function createEmployeeRecords(employees){
    let employeeRecords = employees.map(function(employee){
      return createEmployeeRecord(employee)
    })
    return employeeRecords
}

function createTimeInEvent(employee, dateStamp){
  console.log(typeof dateStamp.strip(" ")[1])
 // employee.timeInEvents.push(dateStamp)
}