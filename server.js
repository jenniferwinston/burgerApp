//Require the following npm packages inside of the server.js file:
// express, method-override, body-parser

var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var routes = require('./controllers/burgers_controller.js');



//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use('/', routes);

var PORT = process.env.PORT || 3000;
app.listen(PORT);
  