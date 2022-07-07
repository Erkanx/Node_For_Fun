const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');
const { argv } = require('yargs');

// Customize yargs version
yargs.version('1.1.0');

// add, remove, read, list

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler()  {
       notes.removeNote(argv.title);
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler() {
        notes.readNote(argv.title);
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler() {
        notes.listNote()
    }
})

yargs.parse();
