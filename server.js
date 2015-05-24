// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Controllers
var ConsultantCtrl = require('./controllers/ConsultantCtrl.js');

// Express
var app = express();

// Middleware
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());


// Endpoints

//** Consultant **//
app.post('/api/register/consultant', ConsultantCtrl.createConsultant);
app.get('/api/consultants/:userId', ConsultantCtrl.readConsultant);
app.put('/api/consultants/:userId/edit', ConsultantCtrl.updateConsultant);
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
