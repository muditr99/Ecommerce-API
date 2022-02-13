const Product = require('../models/product');

// this action will create a product 
module.exports.create = function(req, res){
    let id ;
    let max = -1;
    let product = req.body;
    Product.find({}, function(err, products){
        if(err){
            console.log('error in fetching the products', err);
            return res.json(500,{
                message : "Internal Server Error"
            })
        }

        if(products.length == 0){
            id = 1;
        }else{
        for(let i=0;i<products.length;i++){
            if(products[i].id > max){
                max = products[i].id;
            }
        }
        id = max + 1;
        }

        product["id"] = id;

        Product.create(product, function(err, newProduct){
            if(err){
                console.log("error in creating product", err);
                return res.json(400,{
                    message : err.message
                })
            }

            return res.json(201, {
                message : 'product added to inventory',
                product : {
                    name : product.name,
                    quantity : product.quantity,
                },
            })
        })
    })
}

// this action will display the list of products
module.exports.list = function(req, res){
    let arr = [];
    Product.find({}, function(err, products){
        if(err){
            console.log('error in fetching the products', err);
            return res.json(500,{
                message : "Internal Server Error"
            })
        }

        for(let i=0;i<products.length;i++){
            let data = {
               id : products[i].id,
               name : products[i].name,
               quantity : products[i].quantity,
            }

            arr.push(data);
        }
        
        return res.json(200, {
            message : 'list of products',
            products : arr,
        });
    })
}

// this action will remove a product 
module.exports.destroy = function(req, res){
    let id = req.params.id;

    Product.remove({id : id}, function(err){
        if(err){
            return res.json(500, {
                message : err.message
            })
        }
        return res.json(200, {
            message : 'product deleted'
        })
    })
}

// this action will update a product
module.exports.update = function(req, res){
    let quantity = req.query.number;
    let data;
    Product.findOne({id : req.params.id}, function(err, product){
        if(err){
            return res.json(400, {
                message : err.message
            })
        }
        if(!product){
            return res.json(404, {
                message : 'Cannot find product for updating'
            })
        }
        product.quantity = quantity;
        product.save();
        data = {
            id : product.id,
            name : product.name,
            quantity : product.quantity,
        }
        return res.json(200, {
            product : data,
            message : 'updated successfully'
        }) 
    })
}