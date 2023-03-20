const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const dataArray = data.toString().split('\n').map((e) => e.trim())
      .map((e) => e.split(',').map((e) => e.trim()));
    const dataKeys = dataArray.shift();
    const result = [];
    const dataSet = new Set();

    for (let i = 0; i < dataArray.length; i += 1) {
      const dataJson = {};
      for (let j = 0; j < dataArray[i].length; j += 1) {
        dataJson[dataKeys[j]] = dataArray[i][j];
        if (dataKeys[j] === 'field') {
          dataSet.add(dataArray[i][j]);
        }
      }
      result.push(dataJson);
    }

    console.log(`Number of students: ${dataArray.length}`);

    dataSet.forEach((value) => {
      const arr = result.filter((item) => item.field === value);
      const firstNames = arr.map((item) => item.firstname);
      console.log(`Number of students in ${value}: ${arr.length}. List: ${firstNames.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
