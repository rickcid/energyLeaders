// Dependencies
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;

// Controllers
var UserCtrl = require('./controllers/UserCtrl.js');

// Models 
var User = require('./models/User.js')


// Express
var app = express();

// Middleware
app.use(session({
  secret: 'energyleaders are awesome consultants',
  saveUninitialized: true,
  resave: true
}))
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
//app.use('/api/consultant', )

//Passport Strategy
passport.use(new LocalStrategy({
  usernameField: 'email'
}, function(email, password, done) {
  //define how to match user credentials to db values
  User.findOne({ email: email }, function(err, user) {
    if (!user) {
      done(new Error('This user does not exist'));
    }
    user.verifyPassword(password).then(function(doesMatch) {
      if (doesMatch) {
        done(null, user);
      }
      else {
        done(new Error("please verify your password"));
      }
    });
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});


// Endpoints

//someFuncthatVerifies

//** User **//
app.post('/api/register/user', UserCtrl.createUser);
app.post('/api/login/user', passport.authenticate('local', { failureRedirect: '/browse'}), UserCtrl.loginUser);
app.post('/api/update/user-info/:userId', UserCtrl.updateUser);
app.get('/api/user/isLoggedIn', UserCtrl.isLoggedIn);



// app.post('api/login/consultant', ConsultantCtrl.loginConsultant); 
// app.get('/api/consultants/:userId', ConsultantCtrl.readConsultant);
// app.put('/api/consultants/:userId/edit', ConsultantCtrl.updateConsultant);
// app.get('/sighting', SightingCtrl.read);
// app.get('/sighting/:id', SightingCtrl.byUser);
// app.put('/sighting/:id', SightingCtrl.update);
// app.delete('/sighting/:id', SightingCtrl.delete);


// app.post('/user', UserCtrl.create);
// app.get('/user', UserCtrl.read);
// app.put('/user/:id', UserCtrl.update);
// app.delete('/user/:id', UserCtrl.delete);


// Connections
var port = 9001;
var mongoUri = 'mongodb://localhost:27017/energyLeaders';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to MongoDB at ', mongoUri);
});

app.listen(port, function() {
  console.log('Listening on port ', port);
});
