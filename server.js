var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 8080;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app); 


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});