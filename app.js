const express = require ('express');
const jwt = require ('jsonwebtoken');
const User = require('./models/Users');
const mongoose = require('mongoose');
const { body , validationResult } = require('express-validator');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');


const app = express();

app.use(express.json());

const dbURI = 'mongodb://localhost:27017/UserDB';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true , useFindAndModify : false} , () => console.log('connected to db'))


app.get('/api' , (req,res) => {
    res.json({
        message : 'Hello api'
    })
})

app.listen(3000 , () => {
    console.log('listening at 3000');
})

app.use('/api', authRoutes);

