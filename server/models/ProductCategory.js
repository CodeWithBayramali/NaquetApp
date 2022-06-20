const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  id:{
    type:Number
  },
  name:{
      type:String,
      required:true
  },
  img:{
    type:String,
    required:true
  }  
})

const Category = mongoose.model('Categories',categorySchema);

module.exports = Category;