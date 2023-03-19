const mongoose = require('mongoose');


const usersSchema = new mongoose.Schema({
  email: { 
    type: String,
    required: true,
    unique: true 
  },
  username: { 
    type: String,
    required: true 
  },
  password: { 
    type: String,
    required: true 
  },
  userType: { 
    type: String,
    required: true 
  },
  authKey: { 
    type: String,
    required: true
  },
  monthlyCounter: { 
    type: Number,
    required: true
  },
  resetTime: { 
    type: Date,
    required: true
  }
},
{
  collection: 'users'
});

module.exports = usersSchema;
