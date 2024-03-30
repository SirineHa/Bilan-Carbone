const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//creation user
UserSchema.statics.createUser = async function(userData) {
  try{
    return await this.create(userData);
  }catch(error){
    throw new Error(error);
  }
}

const User = mongoose.model('User', UserSchema);

module.exports = User;