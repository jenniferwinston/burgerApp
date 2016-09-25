//Require the following npm packages inside of the server.js file:
// express, method-override, body-parser

var override = require('method-override');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');


var titles = {
    title: "My awesome title."
};

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home', {layout: "sidebar", title: "My awesome title."});
})

app.listen(3000);