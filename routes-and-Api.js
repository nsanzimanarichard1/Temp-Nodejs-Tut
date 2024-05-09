const express = require('express');
const app = express();
const {products} = require('./data');


app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) =>{
        const {id} = product;
        return {id}
    })
    res.json(newProducts);
})
app.get('/api/products/:productsId', (req, res) => {
    // console.log(req)
    // this req.params help to get any product from our api databases using productsId
    // we have used datatype of Number to convert string to number because params return string
    // console.log(req.params)
    const {productsId}= req.params;
    const singleProduct = products.find((product) => product.id === Number(productsId) )
    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist')   
    }
    return res.json(singleProduct);
})

app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((productSearched) => {
            return productSearched.name.startsWith(search)
        })
    }  
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))

    }
    if(sortedProducts < 1){
        return res.status(200).send('No search products Found!!!')
    }
    return res.status(200).json(sortedProducts)
    res.send('hello world')
})

app.listen( 5000, ()=>{
    console.log('server is listerning to port!! 5000 Now')
});