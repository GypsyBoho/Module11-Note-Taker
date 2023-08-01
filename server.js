const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//http://localhost:3001/api
app.use('/api', api);

app.use(express.static('public'));

// GET Route for feedback page
app.get('/notes', (req, res) => //note
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) => // make this into a star but put last
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
