require('dotenv').config();
// import express to our app
const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({
    extended: true
}));

const MongoClient = require('mongodb').MongoClient;
// In my machine(ubuntu), mongodb runs locally at 127.0.0.1:27017
// so you may need change the url based on your machine!
MongoClient.connect('mongodb://127.0.0.1:27017',(err, client)=>{
if (err) return console.log(err);
// connect to mongodb instance, here I use 'test' database,
// you can use any name!
db = client.db('quotes');
});

const routes = require('./routes/');
app.use('/', routes);

app.use(express.static('public'));
// app.use('/static', express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Welcome to VoiceViet!');
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(module.exports);
    console.log('App started on port: ', port);
})