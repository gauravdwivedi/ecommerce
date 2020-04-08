const Product = require('../../../models/product');

module.exports.create = async function (req, res) {

    console.log(req.body);
    try {

        const product = await Product.create({
            id: req.body.id,
            name: req.body.name,
            quantity:req.body.quantity
        });

        return res.status(200).json({
             data: {
                product: product
            } 
        });
            } catch (err) {
                return res.status(500, {
            message: "Internal Server Error"
        });
    }
}

module.exports.getProducts = async function (req, res) {
   
    try {
        const products = await Product.find({});
        return res.status(200).json({
            data: {
                product: products
            }
        });
    } catch (err) {
        
        return res.status(500, {
            message: "Internal Server Error"
        });
    }
}

module.exports.delete = async function (req, res) {

    console.body(req.body);
    try {
        //find product to be deleted
        await Product.findOne({ id: req.params.id });

        Product.remove();

        return res.status(200).json({
            data: {
              message: "product deleted"
            }
          });
    } catch (err) {
        
        return res.status(500, {
            message: "Internal Server Error"
        });
    }
    
}