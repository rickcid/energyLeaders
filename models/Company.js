var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var q = require('q');

var companySchema = new mongoose.Schema({
  company_name: { type: String },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: 'Company'}
})



//Pre('save') runs before every user is created
UserSchema.pre('save', function(next) {
  var user = this;
  //password encryption
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      console.log(hash);
      user.password = hash;
      next()
    })
  })
})

UserSchema.methods.verifyPassword = function(password) {
  var deferred.defer();
  var user = this;
  bcrypt.compare(password, user.password, function(err, res) {
    if (err) {
      deferred.resolve(false);
    }
    deferred.resolve(true);
  })
  return deferred.promise;
}

module.exports = mongoose.model('Company', CompanySchema);

// //authenticate.js
// module.exports = {
//   brcyptHash: function(next) {
//   var user = this;
//   //password encryption
//   bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(user.password, salt, function(err, hash) {
//       console.log(hash);
//       user.password = hash;
      
//     })
//   })
//   },

//   bcryptVerify: function(){
//     //brcypt verify stuff
//   }
// };


// var Authenticate = require('./authenticate.js');

// userSchema.pre('save', Authenticate.brcyptHash(next)
// })


