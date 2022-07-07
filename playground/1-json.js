const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Erkan';
data.age = '29';

const userJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', userJSON)
