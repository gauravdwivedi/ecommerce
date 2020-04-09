const express = require('express');
const router = express.Router();
const productController = require('../../../controllers/api/v1/productController');

// to get all products 
router.get('/', productController.getProducts);

//to add a new product in db
router.post('/create', productController.create);
// to delete a existing product from db
router.delete('/:id', productController.delete);
//to update name and quantity of given id.
router.post('/update', productController.update);



module.exports = router;