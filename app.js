var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// path is a node command, you can do stuff like this:
// var filename = path.basename('/Users/Refsnes/demo_path.js');
// console.log(filename);

// load espress
var app = express();

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// redirect to a folder instead of printing stuff directly froö this file
app.use(express.static(path.join(__dirname, 'public')));

// or create a route and print stuff
app.get('/', (req, res) => {
    // print this directly to the home page of your app
    res.send("Second message, OMG it's working!");
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
})