const express = require('express');
const app = express();
app.get(('/'), (req, res)=>{
    res.status(200).send('this is Home Page');

});
app.get(('/about'), (req, res) => {
    res.status(200).send('this is about page');
});
app.all(('*'), (req, res) => {
    res.status(404).send('<h1>  page was not fount</h1>');
});
app.listen(5000, ()=>{
    console.log('server is listening to 5000 port!!!');
})