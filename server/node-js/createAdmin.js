const mongoose = require('mongoose');
const Admin = require('./models/Admin');
const dbUri = process.env.MONGODB_URI;

mongoose.connect(dbUri)
  .then(() => {
    console.log('MongoDB connected...');

    // Create an admin user
    const newAdmin = new Admin({
      username: 'admin',
      password: 'password123'
    });

    newAdmin.save()
      .then(() => console.log('Admin user created'))
      .catch(err => console.error(err));
  })
  .catch(err => console.error(err));