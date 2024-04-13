const express = require('express');
const userRouter = require('./Routes/UserRouter')
const productRouter = require('./Routes/ProductRouter')
const conn = require('./config/connection')
const User = require('./Models/User')
const Product = require('./Models/Product')

const app = express();

app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(4000, () => {
    console.log('server is listening at port 4000')
})
