const notes = require('./notes');
//const validator = require('validator');
const chalk = require('chalk');


console.log(notes.getNotes());

//console.log(validator.isURL('https://google.com'));

console.log(chalk.green.inverse('Success!'));

console.log(chalk.green('Success!'));