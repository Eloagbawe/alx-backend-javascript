export default function cleanSet(set, startString) {
  const resultArray = [];
  if (startString !== '') {
    set.forEach((item) => {
      if (item.startsWith(startString)) {
        const string = item.replace(startString, '');
        resultArray.push(string);
      }
    });
  }
  return resultArray.join('-');
}
