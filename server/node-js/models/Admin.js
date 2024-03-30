const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//creation user
AdminSchema.statics.createAdmin = async function(adminData) {
  try{
    return await this.create(adminData);
  }catch(error){
    throw new Error(error);
  }
}

//verification
AdminSchema.statics.findAdminById = async function(adminId) {
  try {
      return await this.findById(adminId);
  } catch (error) {
      throw new Error(error);
  }
};

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;