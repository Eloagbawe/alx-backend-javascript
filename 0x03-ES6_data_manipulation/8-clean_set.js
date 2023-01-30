export default function cleanSet(set, startString) {
  const resultArray = [];
  startString = startString.toLowerCase();
  if (startString !== '' && typeof startString === 'string' && set instanceof Set) {
    set.forEach((item) => {
      if (item.startsWith(startString)) {
        const string = item.replace(startString, '');
        resultArray.push(string);
      }
    });
  }
  return resultArray.join('-');
}
