const fs = require('fs');
const chalk = require('chalk');

module.exports.getNotes = () => {
    return 'Your Notes...'
}

module.exports.addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('New Note Added');
    } else {
        console.log('Note title taken!');
    }
}

module.exports.removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        return note.title !== title;
    })

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note Removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No Note Found!'));
    }
}

loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

removeNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}