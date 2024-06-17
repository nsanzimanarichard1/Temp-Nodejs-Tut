require('dotenv').config();
require('express-async-errors')
const express = require('express')

const app = express();

const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')
const connectdb = require('./db/connect')
const productsRouters = require('./routes/products')

// middleware
app.use(express.json())

// Middleware to serve static files from 'public' directory
app.use(express.static('public'));

//routers

app.get('/', (req, res) =>{
    res.send('<h1>STORE API</h1><a href="/api/v1/products"> products routes</a>')
}) 

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
 
//products routes
app.use('/api/v1/products', productsRouters)
 
app.use(errorHandler)
app.use(notFound)


const port = process.env.PORT || 3000;

const start = async() =>{ 
    try {
        //connect db
        await connectdb(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening to port  ${port}...`)) 
        
    } catch (error) {
        console.log(error)
        
    }
}

start();

