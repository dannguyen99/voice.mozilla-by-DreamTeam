const router = require('express').Router();

const quotes = require('./quotes.js');
const fbi = require('./fbi.js');
router.use('/', quotes);
router.use('/', fbi);

module.exports = router;

// Debugging purpose
console.log('Module from /routes/index.js');
console.log(module);
