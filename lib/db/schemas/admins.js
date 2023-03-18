const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
  email: { 
    type: String,
    required: true 
  },
  username: { 
    type: String,
    required: true 
  },
  password: { 
    type: String,
    required: true 
  }
},
{
  collection: 'admins'
});

module.exports = adminSchema;
