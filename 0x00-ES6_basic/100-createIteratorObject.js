export default function createIteratorObject(report) {
  const array = [];

  /* eslint-ignore */
  // for (const key in report.allEmployees) {
  //   array.push(...report.allEmployees[key]);
  // }
  /* eslint-ignore */

  Object.values(report.allEmployees).forEach((value) => array.push(...value));
  return array;
}
