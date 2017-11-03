var express = require('express');
const path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4200;
var cors = require('cors');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

mongoose.Promise = require('bluebird');
mongoose.connect(DB_CREDS)
.then(() => { 
  console.log('Start');
})
.catch(err => {
    console.error('App starting error:', err.stack);
    process.exit(1);
});


require('./models/Post');
const routes = require('./routes/index');



app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', routes);


app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});

module.exports = app;