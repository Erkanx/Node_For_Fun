const notes = require('./notes');
const validator = require('validator');


console.log(notes.getNotes());

console.log(validator.isURL('https://google.com'));
