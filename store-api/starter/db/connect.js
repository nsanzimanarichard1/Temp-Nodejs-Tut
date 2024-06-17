const mongoose = require('mongoose');

const connectDb = async (url) =>{
     try {
        await mongoose.connect(url)
        console.log('connecting to db done')
        
     } 
     catch (error) {
        console.log(error)
     }

}

module.exports = connectDb;

