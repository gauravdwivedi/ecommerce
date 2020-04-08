const express = require('express');
const router = express.Router();
const productController = require('../../../controllers/api/v1/productController');

router.get('/', productController.getProducts);
router.post('/create', productController.create);
router.delete('/:id', productController.delete);



module.exports = router;