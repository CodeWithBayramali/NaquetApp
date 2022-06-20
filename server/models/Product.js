const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String,
        required:true
    },
    categoryId:{
        type:Number,
        required:true
    }
})

const Product = mongoose.model('Products',productSchema);

module.exports = Product;