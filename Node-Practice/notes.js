const fs = require('fs');
const chalk = require('chalk');

module.exports.getNotes = () => {
    return 'Your Notes...'
}

module.exports.addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => {
    //     return note.title === title;
    // })

    const duplicateNote = notes.find((note) => {
        return note.title === title;
    })

    if (!duplicateNote) {
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

module.exports.readNote = (title) => {
    const notes = loadNotes();

    const readNote = notes.find((note) => {
        return note.title === title;
    })

    if (readNote) {
        console.log(chalk.grey.inverse(readNote.title));
        console.log(readNote.body)
    } else {
        console.log(chalk.red('Can not find note'));
    }
}

module.exports.listNote = () => {
    const notes = loadNotes()

    console.log(chalk.blue.inverse('Your Notes'));

    notes.forEach((note) =>{
        console.log(note.title)
    })

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