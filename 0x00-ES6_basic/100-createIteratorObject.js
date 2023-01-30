export default function createIteratorObject(report) {
  // const array = [];
  const employeesObj = report.allEmployees

  /* eslint-ignore */
  // for (const key in report.allEmployees) {
  //   array.push(...report.allEmployees[key]);
  // }
  /* eslint-ignore */

  // Object.values(report.allEmployees).forEach((value) => array.push(...value));

  employeesObj[Symbol.iterator] = () => {
    let employeesByDept = Object.values(employeesObj);
    let employeeIndex = 0;
    let deptIndex = 0;

    return {
      next() {
        if (employeeIndex >= employeesByDept[deptIndex].length) {
          deptIndex++;
          employeeIndex = 0;
        }

        if (deptIndex >= employeesByDept.length) {
          return { value: undefined, done: true };
        }

        return {
          value: employeesByDept[deptIndex][employeeIndex++],
          done: false
        }
      }
    }
  }
  // return array;
  return employeesObj;
}
