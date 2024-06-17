require('dotenv').config()
const connectDb = require('./db/connect')

const jsonProducts = require('../starter/products.json')
const products = require('./models/products')

const start = async() =>{
    try {
        await connectDb(process.env.MONGO_URI)
        await products.deleteMany()
        await products.create(jsonProducts)
        console.log('succsss connected....')
        process.exit(0)
        
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
  
}

start();

  