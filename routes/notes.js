const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
//http://localhost:3001/api/notes/
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new notes
//http://localhost:3001/api/notes/
notes.post('/', (req, res) => {
  console.info(`${req.method} request received to add a notes`);
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    const parsedData = readAndAppend(newNote, './db/db.json');
    console.log(parsedData);
    res.json(parsedData);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = notes;
