const express = require('express');
const app = express();
const morgan = require('morgan')
const logger = require('./middleware');
const uthorized = require('./uthorized');

// req => middleware must be between this two request and response => res

app.use(morgan('tiny'))

// app.use([logger, uthorized])

app.get('/', (req, res) => {
    res.send(' this is A Home Page')
})


app.get('/api/about', (req, res) => {
    res.send('this is about page!')
})

app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('Items')
})


app.listen(5000, ()=>{
    console.log('server is listening to 5000 port!!!!')
})