// Admin.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

AdminSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

AdminSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;