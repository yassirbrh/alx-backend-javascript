export default function createIteratorObject(report) {
  const iterator = [];
  const employees = report.allEmployees;
  Object.keys(employees).forEach((depart) => {
    for (const employee of employees[depart]) {
      iterator.push(employee);
    }
  });
  return iterator;
}
