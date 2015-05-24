var Consultant = require('../models/Consultant');

module.exports = {

  createConsultant: function(req, res) {
    var newConsultant = new Consultant(req.body);
    newConsultant.save(function(err, result) {
      console.log('err: ', err);
      if(err) return res.status(500).json(err);
      res.json(result);
    });
  },
//Used 'json' as oppossed to 'send' because it was not sending the object back
  readConsultant: function(req, res) {
    console.log('req.query: ', req.query);
    Consultant.find(req.query)
    .exec(function(err, result) {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  },

  updateConsultant: function(req, res) {
    Consultant.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  },

  deleteConsultant: function(req, res) {
    Consultant.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).json(err);
      res.send(result);
    });
  }

};
