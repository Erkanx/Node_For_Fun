const notes = require('./notes');
const chalk = require('chalk');

const command = process.argv[2];

if(command === 'add'){
    console.log('Added Notes');
} else if (command === 'remove'){
    console.log('Removing notes!');
}


// console.log(notes.getNotes());

// //console.log(validator.isURL('https://google.com'));

// console.log(chalk.green.inverse('Success!'));

// console.log(process.argv[2]);


