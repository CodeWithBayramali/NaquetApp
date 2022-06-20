const mongoose = require('mongoose');

const sellerSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  userName:{
    type:String,
    required:true
  },
  productId:{
    type:String,
    required:true
  },
  categoryId:{
    type:String,
    required:true
  },
  productName:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  kg:{
      type:Number,
      required:true
  },
  price:{
      type:String,
      required:true
  },
  imgURL:{
      type:String,
  }
});

const Seller = mongoose.model('Sellers',sellerSchema);

module.exports = Seller;
