
var express = require('express')
var app = express();
var mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient;
var bodyParser = require('body-parser');
var messagesRouter = require('./routes/playlistRouter')
var cors = require('cors')


var connectionPromise = MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }); // it's a promise
var db;
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
var corsOptions = {
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
    optionsSuccessStatus: 200 
}
app.use(allowCrossDomain);
app.use(cors(corsOptions));
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