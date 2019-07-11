const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
    command: "add",
    description: "add products",
    builder: {
        title: {
            describe: "This is the name of product",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "This is the item of the product",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: "list",
    description: "This will list all the content",
    builder: {
        title: {
            describe: "listing title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "listing body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.listNote(argv.title, argv.body)
    }
})

yargs.command({
    command: "remove",
    description: "This will remove title of the content",
    builder: {
        title: {
             describe: "This is title",
             demandOption: true,
             type: "string"
        },
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: "read",
    description: "Read notes",
    builder: {
        title: {
            describe: "Seach and read notes title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNotes(argv.title)
    }
})

yargs.parse();
// console.log(yargs.argv);