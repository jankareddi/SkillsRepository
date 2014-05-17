var express = require('express');
var http = require('http');

var app = express();
app.set('port', process.env.PORT || 5000);
app.use(express.logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});