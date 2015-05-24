var mongoose = require('mongoose');

var consultantSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  phone_number: { type: Number },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String },
  city: { type: String },
  state: { type: String },
  zip_code: { type: Number },
  country: { type: String },
  updated: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Consultant', consultantSchema);
