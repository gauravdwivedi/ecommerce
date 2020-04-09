const express = require('express');
const router = express.Router();


//routes to product
router.use('/products', require('./product'));



module.exports = router;