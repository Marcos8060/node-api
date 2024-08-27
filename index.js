const express = require('express')
const mongoose = require('mongoose');

const app = express()

app.get('/', (req,res) => {
    res.send('Server Listening on port 3000')
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