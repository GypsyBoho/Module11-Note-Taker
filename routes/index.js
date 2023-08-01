// const express = require('express');
// const miniApp = express.Router();
const router = require('express').Router();

// Import our modular routers for /notes
const noteRouter = require('./notes');
// http://localhost:3001/api/notes
router.use('/notes', noteRouter);

module.exports = router;