var port = process.env.PORT || 3000;
var express = require("express");

var app = express();
app.use('/', express.static('./docs' + '/'));
app.listen(port);

console.log('Running server at http://localhost:' + port + '/');