
/**
 * Module dependencies.
 */

var express = require('express')
  , mongoose = require('mongoose')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  //app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

mongoose.connect('mongodb://localhost/test');
var models = require('./models')(mongoose);

var user = require('./routes/user')(models.User);
var skill = require('./routes/skill')(models.Skill);

app.get('/users', user.get);
app.get('/users/:id', user.getById);
app.post('/users', user.post);
app.put('/users/:id', user.update);
app.delete('/users/:id', user.remove);

app.get('/skills', skill.getAll);
app.post('/skills', skill.post);
app.put('/skills/:skillId', skill.update);
app.delete('/skills/:skillId', skill.remove);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
