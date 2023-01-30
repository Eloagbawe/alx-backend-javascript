export default function cleanSet(set, startString) {
  const resultArray = [];
  const start = startString.toLowerCase();
  if (start !== '' && typeof start === 'string' && set instanceof Set) {
    set.forEach((item) => {
      if (item.startsWith(start)) {
        const string = item.replace(start, '');
        resultArray.push(string);
      }
    });
  }
  return resultArray.join('-');
}
