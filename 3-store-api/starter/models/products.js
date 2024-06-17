const mongoose = require('mongoose')
 
const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true , 'name should be entered'],
    },
    price:{
        type:Number,
        required:[true, 'product price must be provided']
    },
    featured:{
        type:Boolean,
        default: false
    },
    rating: {
        type: Number,
        default:4.5
    },
    createdArt: {
        type: Date,
        default: Date.now()
    },
    company:{
        type: String,
        enum:{
            values: ['marcos','liddy','ikea','caressa'],
            message: 'VALUE is not supported',
            
        }
        
        // enum:['marcos','liddy','ikea','caressa'],
    },
})

module.exports= mongoose.model('products', productSchema );
