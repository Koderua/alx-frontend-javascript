export default function createIteratorObject(report) {
  const employees = [];
  for (const dept of Object.keys(report.allallEmployees)) {
    for (const employee of report.allallEmployees[dept]) {
      employees.push(employee);
    }
  }
  return employees;
}
