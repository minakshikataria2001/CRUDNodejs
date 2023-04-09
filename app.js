

const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1/AlienDBex';

const app = express();
mongoose.connect(url,{useNewUrlParser:true});
const con = mongoose.connection;

con.on('open',function(){
    console.log("connection successful");
})

app.use(express.json());

const alienRouter = require('./routes/Aliens');

app.use('/aliens',alienRouter);

 app.listen(9000, function(){
    console.log("server started");
 })