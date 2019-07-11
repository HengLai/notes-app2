const fs = require('fs');
const chalk = require('chalk');
// const getNotes = () => {
//     return "Your return of get node is here";
// }
exports.getNotes = () => {
    return "your return of get node is here";
}

exports.addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateData = notes.filter(note => {
    //     return note.title === title
    // })
    const duplicateData = notes.find(note => {
        return note.title === title 
    })
    if(!duplicateData){
        notes.push({
            title: title,
            body: body
        })
        console.log('Data has been added');
    } else {
        console.log("Data already Exist");
    }
    saveNotes(notes);
}

const saveNotes = (notes) => {
    const noteData = JSON.stringify(notes)
    const writeData = fs.writeFileSync('notes.json',noteData)
    return writeData
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(err) {
        return []
    }
}

exports.removeNote = (title) => {
    const notes = loadDeleteNote()
    const notesToKeep = notes.filter(note => {
        return note.title !== title
    })
    if(notes.length == 0){
        console.log(chalk.bgRed('No note found'))
    } else {
        console.log(chalk.bgGreen('Note removed'));
    }
    saveDeleteNotes(notesToKeep)
}

const loadDeleteNote = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(err) {
        console.log('Not content to be removed')
    }
}

const saveDeleteNotes = (notes) => {
    try {
        const strNotes = JSON.stringify(notes)
        const newData = fs.writeFileSync('notes.json', strNotes)
        return newData
    } catch(err){
        console.log('err')
    }
}

exports.listNote = (title, body) => {
    notes = loadNotes()
    console.log(chalk.green('Your Notes'))
    notes.forEach(note => {
        console.log(chalk.green('*** Product ***'));
        console.log('Title: ' + note.title)
        console.log('Body: ' + note.body)
    });

}

exports.readNotes = (title) => {
    const notes = loadNotes()
    const findData = notes.find(note => {
        return note.title === title
    })
    if(findData) {
        console.log(chalk.green('Founded Notes'))
        console.log(findData.title + " -> " + findData.body)
    } else {
        console.log(chalk.red("can't find notes"))
    }

}