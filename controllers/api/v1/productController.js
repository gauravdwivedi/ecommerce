const Product = require('../../../models/product');

//adding new product in DB
module.exports.create = async function (req, res) {

    console.log(req.body);

    try {
        //Product will create new product in db    
        const product = await Product.create({
            id: req.body.id,
            name: req.body.name,
            quantity:req.body.quantity
        });

        //return json response to user
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

//fetch all products from db
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

   // console.body(req.params.id);

    try {
        //find product to be deleted
      const product =  await Product.findOne({ id: req.params.id });

        //delete item
        product.remove();

        //return json response
        return res.status(200).json({
            data: {
              message: "product deleted"
            }
          });
    }catch(err) {
        console.log("Error deletiing product", err);
        return res.status(500).json({
            message: "Internal Server Error when deleting"
        });
    }
}

//update product by id
module.exports.update = async function (req, res) {
    
    try {
        //find product to be updated
        const product = await Product.findOne({ id: req.body.id });

        //Now to update the fields of id given by user
        product.name = req.body.name;
        product.quantity = req.body.quantity;

        //product is being updated
        await Product.updateOne(product);

        //returning json response to user
        return res.status(200).json({
            data: {
                product: product,
                message:"Updated Successfully"
            }
        })

    } catch (err) {
        
        return res.status(500).json({
            message: "Internal Server Error !!!"
        });
}
}