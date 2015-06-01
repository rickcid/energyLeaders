var User = require('../models/User');

module.exports = {

  createUser: function(req, res) {
    var newUser = new User(req.body);
    newUser.save(function(err, result) {
      console.log('err: ', err);
      if(err) {
        if(err.code === 500) return res.status(500).json(err);
        if(err.code === 11000) return res.status(11000).json(err);
      }
      res.send(result);
    });
  },

  loginUser: function(req, res) {
    return res.json({loggedIn:true});
  },

  isLoggedIn: function(req, res) {
    if(!req.isAuthenticated()) {
      return res.status(204).json('');
    } else {
      if (req.user.user_type === 'company') {
        return res.status(200).json({isCompany: true});
      } else if (req.user.user_type === 'consultant') {
        return res.status(200).json({isConsultant: true});
      }
    }
  },

  updateUser: function(req, res) {
    Consultant.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  }

  // //Used 'json' as oppossed to 'send' because it was not sending the object back
  // readConsultant: function(req, res) {
  //   console.log('req.query: ', req.query);
  //   Consultant.find(req.query)
  //   .exec(function(err, result) {
  //     if (err) return res.status(500).json(err);
  //     res.json(result);
  //   });
  // },

    
  // //   .exec(function(err, result) {
  // //     if (err) return res.status(500).json(err);
  // //     res.json(result);
  // //   });
  // // },

  // deleteConsultant: function(req, res) {
  //   Consultant.findByIdAndRemove(req.params.id, function(err, result) {
  //     if (err) return res.status(500).json(err);
  //     res.send(result);
  //   });
  // }

};
