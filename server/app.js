var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var idea_routings = require('./controllers/idea');
var project_routings = require('./controllers/project');
var categories_routings = require('./controllers/categories');
var passport = require('passport');

// This is the file we created in step 2.
// This will configure Passport to use Auth0
var strategy = require('./setup-passport');

// Session and cookies middlewares to keep user logged in
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser());
// See express session docs for information on the options: https://github.com/expressjs/session
app.use(session({ secret: 'Mw1DzDOYvZqchGSxVHI5-3F2Y0ITQW4fzUHg18GCIoecEG0Hw6RhgHEr4mNknAHe', resave: false,  saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());



app.use(express.static('client/'));
app.use(express.static('bower_components/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/idea',idea_routings);
app.use('/api/categories',categories_routings);
app.use('/api/project',project_routings);

app.get('/api',function(req,res){
	console.log(req.query); //<- This is for a GET
	res.send({"data" : "Working"});
});

app.post('/api',function(req,res){
	console.log(req.body); //<- This is for a Post
	res.send({"data" : "Working"});
});


app.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    if (!req.user) {
			console.log("ERROR");
      throw new Error('user null');
    }

		console.log("USER LOGGED IN");
		//res.send({data:'as'});
		//req.redirect("/");
  });

app.get('/login', function(req, res){
	res.sendFile(path.join(__dirname + './../client/login.html'));
});

app.post('/api/login',function(req,res){
	console.log(req.body);
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + './../client/index.html'));
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
