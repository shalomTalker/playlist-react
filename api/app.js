
var express = require('express')
var app = express();
var mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient;
var bodyParser = require('body-parser');
var messagesRouter = require('./routes/playlistRouter')
var cors = require('cors')


var connectionPromise = MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }); // it's a promise
var db;

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));
app.use(bodyParser.json());
app.use(messagesRouter);

app.get('/', (req, res) => {
    res.redirect('/playlist')
})

connectionPromise.then(connection => {
    db = connection.db('playlist')
    app.set('db', db)
    app.listen('5000', () => {
        console.log('listen')
    })
}).catch(err => console.error(err));