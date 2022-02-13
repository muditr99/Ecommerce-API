const mongoose = require('mongoose');

// defines what the product looks like in the database
const productSchema = new mongoose.Schema({
    id : {
        type : Number,
        unique : true,
    },
    name : {
        type : String,
        unique : true,
        required : true
    },
    quantity : {
        type : Number,
        min : 1,
        required : true
    }
}, {
    timestamps : true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;