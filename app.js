var express = require('express');

var bodyParser = require('body-parser');

var path = require('path');
// var filename = path.dirname('/Users/Refsnes/demo_path.js');
// console.log(filename);

var app = express();

app.get('/', (req, res) => {
    res.send("Second message, OMG it's working!");
});

app.listen(3000, () => {
    console.log('Hello there, is it working?');
})