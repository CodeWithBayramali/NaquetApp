const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        city:{type:String},
        street:{type:String},
        zipcode:{type:String},
        geo:{
            lat:{type:String},
            lng:{type:String}
        }
    },
    phone:{
        type:String
    },
    website:{
        type:String
    },
    imgURL:{
        type:String
    },
    company:{
        _id:mongoose.Types.ObjectId,
        companyName:String,
        taxNo:String
    },
    password:{
        type:String,
        required:true
    },
    popularPoint:{
        type:Number
    }
})

const User = mongoose.model('Users',userSchema);

module.exports = User;
