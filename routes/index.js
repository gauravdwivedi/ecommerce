const express = require('express');
const router = express.Router();


console.log('router loaded');

//redirects routes to router
router.use('/api', require('./api'));

module.exports = router;