const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth')
const adminproductsRouter = require( './routes/admin/products');
const productsRouter = require( './routes/products');
const cartsRouter = require('./routes/carts');

const app = express();

//will make the public doc available to public
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cookieSession({
        keys: ['randomcooseshChar001']
}));

app.use(authRouter);
app.use(productsRouter);
app.use(adminproductsRouter);
app.use(cartsRouter);


app.listen(3000, () =>{
    console.log('Listening')
});