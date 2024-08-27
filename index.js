const express = require('express')
const mongoose = require('mongoose');
const product = require('./models/product.model.js')
const app = express()

app.use(express.json())

app.get('/', (req,res) => {
    res.send('Server Listening on port 3000')
})

// create api endpoint for getting products
app.get('/api/products', async(req, res) => {
    try {
        const products = await product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
});

// api to get a single product by id
app.get('/api/product/:id', async(req, res) => {
    try {
        const { id } = req.params
        const singleProduct = await product.findById(id);
        res.status(200).json(singleProduct);
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

app.post('/api/products', async(req, res) => {
    try {
        const productItem = await product.create(req.body)
        res.status(200).json(productItem)
    } catch (error) {
        res.status(500).json({ message : error.message })
    }
})


mongoose.connect("mongodb+srv://marcosgav80:getaways@cluster0.xv9hk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log('Connected to the database');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
})
.catch(() => {
    console.log('Connection Failed')
})